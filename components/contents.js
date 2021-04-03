import Menu from "./menu";
import SvgPath from "./svg_path";

const Contents = () => {
    
    return (
        <div className="mt-10">
            <dl className=" space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 justify-items-center">

                <Menu
                    title={'Projects'}
                    subtitle={'Web / Mobile application'}
                    svgPath={SvgPath.project}
                    link={'projects'}
                />

                <Menu
                    title={'About'}
                    subtitle={'Experience / Skills / Education'}
                    svgPath={SvgPath.about}
                    link={'about'}
                />
                <Menu
                    title={'Labs'}
                    subtitle={'🚧'}
                    svgPath={SvgPath.lab}
                    link={'labs'}
                />
                <Menu
                    title={'Contact'}
                    subtitle={'Email / Github / Facebook'}
                    svgPath={SvgPath.contact}
                    link={'contact'}
                />
            </dl>

        </div>
    )
}

export default Contents
