# React-Hook-UseContext
Contexto para manejar claro y oscuro 


1. **Separación de Responsabilidades**:
   - Mantén los componentes pequeños y enfocados en una sola responsabilidad.
   - `MyApp` maneja el estado del tema y proporciona el contexto.
   - `Form`, `Panel` y `Button` son componentes presentacionales.

2. **Uso de Contexto**:
   - Utiliza `createContext` y `useContext` para compartir datos entre componentes sin necesidad de pasar props manualmente.

3. **Estado y Efectos**:
   - Usa `useState` para manejar el estado local del componente.
   - Considera usar `useEffect` si necesitas realizar efectos secundarios basados en cambios de estado.

4. **Accesibilidad**:
   - Asegúrate de que los elementos interactivos (como botones y checkboxes) sean accesibles y tengan etiquetas adecuadas.

5. **Estilos**:
   - Utiliza clases CSS basadas en el tema para aplicar estilos condicionales.
   - Considera usar una biblioteca de estilos como `styled-components` para manejar estilos en componentes.

