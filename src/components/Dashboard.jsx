function Dashboard() {
    return (
        <>
            <section className="dashboard">
                <div className="container py-5">
                    <div className="detail col-8 mx-auto">
                        <button className=" diya btn  rounded-5" >Get Security Updates for Bootstrap 3 & 4</button>
                        <img className="mt-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png" height="165" alt="bootsrap-logo"></img>
                        <h1 className="heading text-center ">Build fast, responsive sites <br />with Bootstrap </h1>
                        <p className="para text-center">Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>
                        <div className="buttons gap-3 d-flex justify-content-center">
                            <button className="highlight btn button-1 rounded-3">$ <span className="text-primary">npm</span> i bootstrap@5 . 3 . 8  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard mb-1 g-5" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                            </svg></button>
                            <button className="btn button-2 rounded-3 "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-book-half mb-1" viewBox="0 0 16 16">
                                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                            </svg> Read the docs </button>
                        </div>
                        <div className=" mt-4 d-flex text-center">
                            <p className="me-4 version">Currently  <b> v5.3.8</b></p>
                            <a className="me-4 version" href="">Download</a>
                            <a className="version" href="">All releases</a>
                        </div>
                        <div className=" d-flex bg-light p-3 gap-3 mt-3 mb-5">
                            <div className="img"> <img src="https://srv.carbonads.net/static/30242/4f7f59796c5dda8f5dfc63a40583dfde7cebb050" height="100"></img></div>
                            <p className="img-para">Design and Development tips in your <br />inbox. Every weekday.<br /><br />ads via Carbon </p>
                        </div>
                        <div className="mt-5 code rounded-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-code" viewBox="0 0 16 16">
                                <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
                            </svg>
                        </div>
                        <h2 className="heading-para m-3">Get started any way you want</h2>
                        <p className="paras text-center">Jump right into building with Bootstrap—use the CDN, install it via package <br />manager, or download the source code.</p>
                        <a className="fs-5 fw-medium" href="">Read installation docs <span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-arrow-right mb-1" viewBox="0 0 16 16">
                            <path  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg></span></a>
                        <div className="package-cdn row d-flex  mt-4">
                            <div className="package col-lg-6 border-right">
                                <div className="card border-0 p-3">
                                    <h3 className="package-heading">Install via package manager</h3>
                                    <p>Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems,<br /> Composer, or Meteor. Package-managed installs don’t include<br /> documentation or our full build scripts. You can also <a href="">use any demo from our<br />Examples repo </a>to quickly jumpstart Bootstrap projects.</p>

                                    <div className="card bg-light">
                                        <button className=" btn highlight rounded-2 p-4 col-lg-12  ">$ <span className="text-primary">npm install</span> bootstrap@5.3.8  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard mb-1 g-5 ms-auto" viewBox="0 0 16 16">
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                        </svg></button>
                                    </div>
                                    <div className="card  bg-light mt-3">
                                        <button className=" btn highlight rounded-2 p-4 col-lg-12 ">$ gem <span className="text-primary">install</span> bootstrap <span className="text-danger"> -v</span> <span className="text-primary">5.3</span>.8  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard mb-1 g-5 ms-auto" viewBox="0 0 16 16">
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                        </svg></button>
                                    </div>
                                    <p className="mt-3"><a href="">Read our installation docs</a> for more info and additional package managers.</p>
                                </div>
                            </div>

                            <div className="CDN col-lg-6">
                                <div className="card border-0 p-3">
                                    <h3 className="CDN-heading">Include via CDN</h3>
                                    <p>When you only need to include Bootstrap’s compiled CSS or JS, you can use <br /><a href="">jsDelivr</a>. See it in action with our simple <a href=""> quick start</a>, or <a href="">browse the examples</a><br /> to jumpstart your next project. You can also choose to include Popper and <br />our JS <a href="">separately</a>.</p>
                                    <div className="card bg-light ">
                                        <button className="btn highlight rounded-2 p-4 col-lg-12">
                                            <pre className="language-html"><code className="language-html"><span className="token tag"><span className="token element"><span className="token ">&lt;</span>link</span> <span className="token attr-name text-primary">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span><span className="punctuation">https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css</span><span className="token punctuation">"</span></span> <span className="token attr-name">rel</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>stylesheet<span className="token punctuation">"</span></span> <span className="token attr-name">integrity</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB<span className="token punctuation">"</span></span> <span className="token attr-name">crossorigin</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>anonymous<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span></code></pre>
                                        </button>

                                    </div>
                                    <div className="card mt-3 bg-light">
                                        <button className="btn highlight rounded-2 p-4 col-lg-12">
                                            <div className="highlight"> <pre className="language-html"><code className="language-html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>script</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js<span className="token punctuation">"</span></span> <span className="token attr-name">integrity</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI<span className="token punctuation">"</span></span> <span className="token attr-name">crossorigin</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>anonymous<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token script"></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>script</span><span className="token punctuation">&gt;</span></span></code></pre> </div>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="guide mt-5 text-center">
                            <h4>Read our getting started guides</h4>
                            <p>Get a jump on including Bootstrap's source files in a new project with our official guides.</p>
                            <div className="icons row  justify-content-center mt-4">
                                <div className="col-lg-2">
                                    <img src="https://getbootstrap.com/docs/5.3/assets/img/webpack.svg" height="72" />
                                    <p className="text-center">Webpack</p>
                                </div>
                                <div className="col-lg-2">
                                    <img src="https://getbootstrap.com/docs/5.3/assets/img/parcel.png" height="72" />
                                    <p className="text-center">parcel</p>
                                </div>
                                <div className="col-lg-2">
                                    <img src="https://getbootstrap.com/docs/5.3/assets/img/vite.svg" height="72" />
                                    <p className="text-center">Vite</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="sass">
                        <div className=" graphic-object p-3 rounded-4 ms-0 "><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-palette2 " viewBox="0 0 16 16">
                            <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a3 3 0 0 1-2.121-.879A3 3 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 15v-4H9.258l-4.015 4zM0 .5v12.495zm0 12.495V13z" />
                        </svg></div>
                        <h2 className="heading-para mt-3 mb-3">Customize everything with Sass</h2>
                        <p className="paras ">Bootstrap utilizes Sass for a modular and customizable architecture. Import only the<br /> components you need, enable global options like gradients and shadows, and write<br /> your own CSS with our variables, maps, functions, and mixins.</p>
                        <a className=" fs-5 fw-medium " href="">Learn more about customizing</a>
                        <div className="row mt-5 d-flex ">
                            <div className="col-lg-6  ">
                                <h3>Include all of Bootstrap’s Sass</h3>
                                <div className="sass-detail ">
                                    <p>Import one stylesheet and you're off to the races with every feature of our CSS.</p>
                                    <button className="btn bg-light text-start col-lg-12 highlight pt-4 pb-4  "><code>
                                        <span className="distance">// Variable overrides first</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard " viewBox="0 0 16 16">
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                        </svg> <br />
                                        <span className="element">$primary</span>: #900;<br />
                                        <span className="element">$enable-shadows</span>: <span className="discription">
                                            true</span>;<br />
                                        <span className="element">$prefix</span>: <span className="discription">"mo-"</span>;<br />
                                        <br /><br />
                                    // Then import Bootstrap<br />
                                        <span className="punctuation">@import</span> <span className="discription">"../node_modules/bootstrap/scss/bootstrap"</span>;
                                    </code>
                                    </button>
                                    <p className="mt-3">Learn more about our <a href=""> global Sass options</a>.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3>Include what you need</h3>
                                <div className="sass-detail">
                                    <p>The easiest way to customize Bootstrap—include only the CSS you need.</p>
                                    <button className="btn  text-start bg-light col-lg-12 highlight  pt-4 pb-4"><code className="text-left">
                                        <span className="distance2 ">// Functions first</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard " viewBox="0 0 16 16">
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                        </svg><br />
                                        <span className="punctuation"> @import</span> <span className="discription">"../node_modules/bootstrap/scss/functions"</span>;<br />
                                        <br />
                                        // Variable overrides second<br />
                                        <span className="element">$primary</span>: #900;<br />
                                        <span className="element">$enable-shadows</span>: <span className="discription">true</span>;<br />
                                        <span className="element">$prefix</span>: <span className="discription">"mo-"</span>;<br />
                                        <br />
                                        // Required Bootstrap imports<br />
                                        <span className="punctuation"> @import</span> <span className="discription">"../node_modules/bootstrap/scss/variables"</span>;<br />
                                        <span className="punctuation"> @import</span> <span className="discription">"../node_modules/bootstrap/scss/variables-dark"</span>;<br />
                                        <span className="punctuation"> @import</span> <span className="discription">"../node_modules/bootstrap/scss/maps"</span>;<br />
                                        <span className="punctuation"> @import</span> <span className="discription">"../node_modules/bootstrap/scss/mixins"</span>;<br />
                                        <span className="punctuation"> @import</span> <span className="discription">"../node_modules/bootstrap/scss/root"</span>;<br />
                                        <br />
                                        // Optional components<br />
                                        <span className="punctuation"> @import</span> <span className="discription">"../node_modules/bootstrap/scss/utilities";</span><br />
                                        <span className="punctuation"> @import</span><span className="discription"> "../node_modules/bootstrap/scss/reboot"</span>;<br />
                                        <span className="punctuation"> @import</span><span className="discription"> "../node_modules/bootstrap/scss/containers"</span>;<br />
                                        <span className="punctuation"> @import</span> <span className="discription">"../node_modules/bootstrap/scss/grid"</span>;<br />
                                        <span className="punctuation"> @import</span> <span className="discription">"../node_modules/bootstrap/scss/helpers"</span>;<br />
                                        <span className="punctuation"> @import</span><span className="discription"> "../node_modules/bootstrap/scss/utilities/api"</span>;</code>
                                    </button>
                                    <p className="mt-3">Learn more about using  <a href="">Bootstrap with Sass</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="variables mt-5">
                        <div className="curly-braces  p-3 rounded-4 punctuation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-braces" viewBox="0 0 16 16">
                                <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                            </svg>
                        </div>
                        <h1 className="heading-para mt-3 mb-3">Build and extend in real-time with<br /> CSS variables</h1>
                        <p className="paras">Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles,<br /> individual components, and even utilities. We provide dozens of variables for colors, font <br />styles, and more at a <span className="punctuation">:root</span> level for use anywhere. On components and utilities, CSS variables<br /> are scoped to the relevant class and can easily be modified.</p>
                        <a className="fs-5 fw-medium" href=""> Learn more about CSS variables<span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-arrow-right mb-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg></span></a>
                        <div className="row d-flex mt-5">
                            <div className="col-lg-6">
                                <h3>Using CSS variables </h3>
                                <p>Use any of our <a href=""> global :root variables</a> to write new styles. CSS variables use the<br /><span className="punctuation"> var(--bs-variableName)</span> syntax and can be inherited by children elements.</p>
                                <button className=" btn bg-light rounded-3 col-lg-12">
                                    <pre>
                                        <code>
                                          
                                          
                                        </code>
                                    </pre>

                                </button>
                            </div>
                            <div className="col-lg-6">
                                <h3>Customizing via CSS variables</h3>
                                <p>Override global, component, or utility class variables to customize Bootstrap just<br /> how you like. No need to redeclare each rule, just a new variable value.</p>
                                <button className=" btn bg-light rounded-3 col-lg-12">
                                    hlo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Dashboard;