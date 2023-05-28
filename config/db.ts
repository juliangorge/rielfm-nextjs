import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: '127.0.0.1',
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  port: 3306,
  database: process.env.MYSQL_DATABASE,
  multipleStatements: true
})

const getById = async (ids: Array<number>, limit: number = 0) => {
  const data = JSON.parse(JSON.stringify(await getByIds(ids, 1)))
  return data[0]
}

const getByIds = async (ids: Array<number>, limit: number = 0) => {
  const [ rows ] = await pool.query(`
      SELECT p.id, s.name as section, p.pompadour, p.title, p.image FROM posts as p
      JOIN posts_sections as s ON s.id = p.section_id
      WHERE p.id IN (${ids})
      ORDER BY field(p.id, ${ids})
      ${limit == 0 ? '' : 'LIMIT ' + limit}
  `)

  return rows
}

const getHome = async () => {
  const [ lineup ] = await pool.query(`SELECT * FROM lineup LIMIT 1`)
  const data = JSON.parse(JSON.stringify(lineup))

  const top = (data[0].top_side).split(',')
  const left = (data[0].left_side).split(',')
  const right = (data[0].right_side).split(',')

  return {
    top: await getById(top, 1),
    left: await getByIds(left),
    right: await getByIds(right)
  }
}

const getMasLeidas = async () => {
  const [ posts ] = await pool.query(`
    SELECT p.id, s.name as section, p.title 
    FROM posts as p
    JOIN posts_sections as s ON s.id = p.section_id
    WHERE p.date_created >= DATE_SUB(NOW(), interval 1 week)
    ORDER BY p.views DESC
    LIMIT 7
  `)
  const data = JSON.parse(JSON.stringify(posts))
  return data;
}

const getNecrologicas = async (page : number = 1) => {
  //const offset = page // multiplicar
  const limit = 100

  const [ postRows ] = await pool.query(`
    SELECT *
    FROM necrologics
    ORDER BY id DESC
    LIMIT ?
  `, limit)

  const data = JSON.parse(JSON.stringify(postRows))
  var necrologics = [];
  
  for(var i = 0; i < data.length; i++){
    var text = `Falleció en la ciudad de ` + data[i].city + `, a los ` + data[i].age + ` años de edad.<br> `

    if(data[i].funeral || data[i].ashes){
      text += `Sus restos son `
    }

    if(data[i].funeral){
      text += `velados en ` + data[i].service
    }

    if(!data[i].ashes){
      if(data[i].funeral){
        text += '. ';      
      }

      text += 'Recibirán sagrada sepultura en ';
    }else{
        if(data[i].funeral){
            text += ' y ';
        }
        text += 'trasladados a ';
    }

    text += data[i].cementery + '. ';

    if(data[i].text){
      text += data[i].text;
    }

    necrologics.push({
      title: data[i].fullname,
      date: data[i].date,
      details: text
    })
  }

  return {
    items: necrologics,
    length: limit
  }
}

const getCronogramaDePagos = async () => {
  const [ posts ] = await pool.query(`
    SELECT schedule 
    FROM web
    WHERE id = 1
    LIMIT 1
  `)
  const data = JSON.parse(JSON.stringify(posts))
  return {
    id: data[0].schedule
  }
}

const getFarmacia = async () => {
  const [ farmacia ] = await pool.query(`
    SELECT p.name, p.address, p.phone 
    FROM pharmacies p 
    JOIN pharmacies_calendar c ON c.pharmacy_id = p.id 
    WHERE c.date = CURDATE()
  `)

  const data = JSON.parse(JSON.stringify(farmacia))
  if(!data.length) return null;
  return data[0]
}

const getLluvias = async ({ciudad_id, start, end} : any) => {
  const [ lluvias ] = await pool.query(`
    SELECT id, date as start, date as end, quantity as title
    FROM rains_calendar 
    WHERE 
    city_id = ? AND quantity > 0 AND 
    date BETWEEN ? AND ?
  `, [ciudad_id, start, end])

  const data = JSON.parse(JSON.stringify(lluvias))
  return data
}

const getSection = async (sectionName : string, page : number = 1) => {
  //const offset = page // multiplicar
  const limit = 100

  const onlyLettersPattern = /^[A-Za-z]+$/
  if(!sectionName.match(onlyLettersPattern)){
    throw new Error('Sección inválida: ' + sectionName)
  }
  
  const [ sectionsRows ] = await pool.query(`
    SELECT * FROM posts_sections WHERE class = ?
  `, [sectionName])

  const section = JSON.parse(JSON.stringify(sectionsRows))

  if(!section.length){
    throw new Error('Sección inválida: ' + sectionName)    
  }

  const [ postRows ] = await pool.query(`
    SELECT p.*, s.name as section
    FROM posts as p
    JOIN posts_sections as s ON s.id = p.section_id
    WHERE s.id = ?
    ORDER BY p.id DESC 
    LIMIT ?
  `, [section[0].id, limit])

  return {
    items: JSON.parse(JSON.stringify(postRows)),
    length: limit,
    section: section[0]
  }
}

const getPost = async (id : number) => {
  const [ rows ] = await pool.query(`
    SELECT p.*, s.name as section_name
    FROM posts as p
    JOIN posts_sections as s ON s.id = p.section_id
    WHERE p.id = ?
  `, id)

  const items = JSON.parse(JSON.stringify(rows))

  if(!items.length){
    throw new Error('Noticia inválida: ' + id);
  }

  return items[0]
}

const updatePostViews = async (id: number) => {
  await pool.query(`UPDATE posts SET views=views+1 WHERE id = ?`, id)
}

export { 
  pool,
  getHome,
  getNecrologicas,
  getCronogramaDePagos,
  getSection,
  getPost,
  getLluvias,
  getFarmacia,
  getMasLeidas,
  updatePostViews
}