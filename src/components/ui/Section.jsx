const Section = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
            {children}
        </section>
    );
};

export default Section;
