const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              DWELLY
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Founded in 2010, DWELLY began with a simple mission: to create
        beautifully crafted, high-quality furniture that brings both style and
        comfort to every home. What started as a small workshop quickly grew
        into a trusted brand known for our attention to detail, innovative
        designs, and commitment to customer satisfaction. Specializing in sofas,
        beds, tables, and shelves, we believe that furniture should be both
        functional and aesthetically pleasing. Our goal is to provide timeless
        pieces made with sustainable materials, ensuring longevity and
        environmental responsibility. At DWELLY, we strive to make every home
        feel inviting and unique, blending modern trends with classic
        craftsmanship. Whether you're furnishing a new space or refreshing your
        current one, we’re here to help you create the perfect environment.
      </p>
    </>
  )
}

export default About
