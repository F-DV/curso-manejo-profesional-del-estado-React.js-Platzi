## Curso Manejo Profesional del Estado en React.js

-> En los componentes de funcion poodemos crear multiples estados, en los componentes de clase No, solo tiene un estado en el contructor y se deben pasar las props.

-> El useEffect en componentes de funccion es equivalente metodos de ciclo de vida en componentes de clases

# ¿Que es un Reducer?
¿Qué es un reducer?

Son una herramienta que nos permite declarar todos los posibles estados de nuestra App para llamarlos de forma declarativa.
Necesitan 2 objetos esenciales: los estados compuestos y las acciones.
Los estados compuestos:

Son un objeto donde van a vivir como propiedades todos nuestros estados
Acciones

Responsables, al ser disparados, de pasar de un estado a otro.
Este objeto tiene 2 propiedades: action type y action payload.
Action type:

Define el nombre clave para encontrar el nuevo estado.
Action payload:

Es opcional e importante con estados dinámicos. Un estado es dinamico cuando depende del llamado de un API, de lo escrito por el usuario en un input, etc. Estos son estados dinámicos y los recibimos con un payload.
Flujo de trabajo:

Definimos distintos tipos de acciones con type y payload.
Enviamos estas acciones a nuestro reducer.
El reducer define los posibles estados por donde pasara nuestra App.
Con action type elegimos cual de esos estados queremos disponer con el cambio o evento del usuario.
Con action payload damos dinamismo a dicho estado. Será el mismo estado pero le daremos características especiales 


------


# Practica de codigos de seguridad commits
-> Primer Commit
- Maquetacion inicial del proyecto

# Estados Simples
- se crea variables de estado para el componente de clase y el componente de funcion

# Efectos con useEffect
- Se crea un estado para mostrar un mensjae de carga en un parrafo simulando un request al backend

# Metodos de ciclo de vida en Componentes de clase
NOTA: REACT 18  ya no recomienda usar los metodos de ciclo de vida.
NOTA 2:  Para que no muestre el mensaje de error ejecutamos UNSAFE_componentWillMount().

- componentWillMount() : Ejecuta cuando renderiza
- componentWillUnmount(): SeEjecuta cuando termina de renderizar
- componentWillDidMount(): Se ejecuta cuando DesRenderizamos.
- componentDidUpdate() : Se ajecuta a cada renderizado.
- Creamos componente Loading para visualizar el componentWillUnMont.

# Estados independientes con UseState
-  creamos variable de estado value que se actualizará con el onChange del input
- creamos condicional para dejar de mostrar el cargando y mostrar el error si la entrada del usuario no coincide con la palabra de seguridad
- NOTA: El problema de los estados independientes es que si tenemos funcionalidades que cambian varios estados, tenemos que llamar cada actualizador por separado. En codigos mucho mas grandes esto puede volverle complicado.

# Estados Compuestos con componentes de clase
- Le agregamos otra condicion para mostrar el parrafo de Error en el componente de funcion.
- creamos el nuevo estado para el value del input.
- Creamos el metodo onChange para actualizar ese valor.

# Estados compuestos con useState
- Creamos un state para almacenar todos los estados juntos.
- ADVERTENCIA: utilizar el sprit operation en el setState.

# Estados Imperactivos con useState
- Es la forma de decirle a nuestro codigo paso a paso que debe hacer.
- condicionamos el return del componente de estado para mostrar una navegacion basica

# Estados semideclarativos con useState
- Creamos funciones aparte para las actualizaciones de los estados