import Styles from './styles.module.css'

export default function Dashboard () {
  return (
    <>
        <header className={Styles.header}>
          hola
        </header>
      <div className={Styles.mainContainer}>
        <aside className={Styles.panel}>
          <button className={Styles.button}>agregar producto</button>
          <button className={Styles.button}>something</button>
          <button className={Styles.button}>something</button>
        </aside>
        <section className={Styles.content}>
          <h1>contenido</h1>
          <input type='text' />
          <input type='text' />
          <button>save</button>
        </section>
      </div>
    </>
  )
}
