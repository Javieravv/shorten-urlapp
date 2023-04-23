import './scss/headercomponent.scss';

export const HeaderComponent = () => {
  return (
    <section className="header-container">
        <article className="header-section1">
            <p className='title-header'>More than just shorte links</p>
            <p>Build your brand's recognition and get detailed insights on how your links are performing,</p>
            <button>
                Get Started
            </button>
        </article>

        <article className="header-section2">
            {/* Aquí va una imagen en el url del background */}
            <img src="/images/illustration-working.svg" alt="Imagen" />
        </article>

    </section>
  )
}
