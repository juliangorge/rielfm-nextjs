- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.

Usando revalidate (Incremental) puedo limpiar la caché de un HTML luego de transcurrido el tiempo definido.
    Ej: revalidate: 1 dia; Un usuario ingresa a la página y la cachea por 1 día. Pasado ese tiempo el siguiente usuario verá la nueva versión
    Ej de uso en Riel: sirve para actualizar los aside de secciones/posts, ya que de lo contrario debería actualizar TODOS los posts

on-Demand Static regeneration:
    Le digo qué rutas (HTMLs) quiero limpiar. (Y puedo mantener el revalidate de forma general)
    Ej: actualizar órden de posts en home, post y lluvias.


Tener en cuenta al usar el ISR: los componentes que comparta con distintas rutas sólo serán actualizadas por tiempo.
Por ejemplo, actualizar una publicidad impactaría inmediatamente en el Home pero tardaría 1 día en las noticias ya que no actualizaría todas para eso.
La solución para esto sería bajar el tiempo de revalidate