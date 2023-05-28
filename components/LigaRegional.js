import {useEffect} from 'react'

const LigaRegional = () => {

    function generateProgrammeTable(data) {
        var table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table-striped');

        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.colSpan = '4';
        th.textContent = 'Resultados - Fecha ';
        tr.appendChild(th);
        thead.appendChild(tr);
        table.appendChild(thead);

        var tbody = document.createElement('tbody');
        var programme = '';
        for (var i = 0; i < data.length; i++) {
            var row = document.createElement('tr');
            var match = data[i];
            var cells = [match.local_alias, match.local_name, match.localscore, match.visitorscore, match.visitor_alias, match.visitor_name, match.status];
            for (var j = 0; j < cells.length; j++) {
                var cell = document.createElement('td');
                cell.classList.add('py-1');
                cell.classList.add('text-center');

                if (j === 0) {
                    var img = document.createElement('img');
                    img.setAttribute('height', 30);
                    img.src = '//ligaregional.com.ar/img/teams/cl/' + match.local + '.png';
                    cell.appendChild(img);
                    row.insertBefore(cell, row.firstChild);
                    tbody.appendChild(row);
                } else if( j === 2 || j === 3) {
                    if(match.status == '4'){
                        cell.textContent = '-';
                    }else{
                        cell.textContent = cells[j];	
                    }
                    cell.classList.add('bg-light');
                    cell.classList.add('fs-5');
                    cell.classList.add('align-middle');
                    if ( i % 2 == 0) {
                        cell.style.cssText = 'background:white!important';
                    }
                    row.appendChild(cell);
                    tbody.appendChild(row);
                } else if (j === 4) {
                    var img = document.createElement('img');
                    img.setAttribute('height', 30);
                    img.src = '//ligaregional.com.ar/img/teams/cl/' + match.visitor + '.png';
                    cell.appendChild(img);
                    row.appendChild(cell);
                    tbody.appendChild(row);
                }
            }
            programme = data[i].programme;
            table.appendChild(tbody);
        }

        th.textContent += programme;

        var container = document.getElementById('ligaregional-container');
        container.appendChild(table);
    };

    function generateTable(data) {
        var table = document.createElement('table');
        table.classList.add('table');

        var headerRow = document.createElement('tr');
        var headers = ['Primera División', 'PTS', 'PJ', 'DG'];

        for (var i = 0; i < headers.length; i++) {
            var headerCell = document.createElement('th');
            if(i !== 0){
                headerCell.classList.add('text-center');
            }
            headerCell.textContent = headers[i];
            headerRow.appendChild(headerCell);
        }
        table.appendChild(headerRow);

        for (var i = 0; i < data.length; i++) {
            var row = document.createElement('tr');
            var team = data[i];
            var cells = [team.alias, team.name, team.score, team.matches, team.goals_diff];
            for (var j = 0; j < cells.length; j++) {
                var cell = document.createElement('td');
                cell.classList.add('py-1');
                if (j === 0) {
                    var img = document.createElement('img');
                    img.setAttribute('height', 40);
                    img.src = '//ligaregional.com.ar/img/teams/cl/' + team.alias + '.png';
                    cell.appendChild(img);
                    var small = document.createElement('small');
                    small.textContent = ' ' + team.name;
                    cell.appendChild(small);
                    row.insertBefore(cell, row.firstChild);
                    table.appendChild(row);
                } else {
                    cell.textContent = cells[j];
                    cell.classList.add('text-center');
                }

                if(j === 2) {
                    cell.classList.add('fw-bold');
                }

                if(j !== 1){
                    row.appendChild(cell);
                }
            }
            table.appendChild(row);
        }

      var container = document.getElementById('ligaregional-container');
      container.appendChild(table);
    };

    useEffect(() => {
        fetch('https://ligaregional.com.ar/getProgramme/92?q=0')
		.then(response => response.json())
		.then(data => generateProgrammeTable(data))
	  	.catch(error => console.error(error));

		fetch('https://ligaregional.com.ar/getTable/92')
		.then(response => response.json())
		.then(data => generateTable(data))
	  	.catch(error => console.error(error));
    }, []);

    return (
        <div className='mb-2'>
            <h6 className='title-black'>Liga Regional</h6>
            <div id='ligaregional-container' className='list-group list-group-numbered border-radius-0 mb-3'></div>
        </div>
    )
}

export default LigaRegional