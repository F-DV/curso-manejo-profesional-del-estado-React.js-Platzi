## Curso Manejo Profesional del Estado en React.js

-> En los componentes de funcion poodemos crear multiples estados, en los componentes de clase No, solo tiene un estado en el contructor y se deben pasar las props.

-> El useEffect en componentes de funccion es equivalente metodos de ciclo de vida en componentes de clases
-> 
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
- componentWillUnMount(): SeEjecuta cuando termina de renderizar
- componentWillDidMount(): Se ejecuta cuando DesRenderizamos.
- componentDidUpdate() : Se ajecuta a cada renderizado.
- Creamos componente Loading para visualizar el componentWillUnMont