import Menu from "./menu";
import { ProjectSVGPath, AboutSVGPath, LabSVGPath, ContactSVGPath } from "./svg_path";

const Contents = () => {
    
    return (
        <div className="mt-10">
            <dl className=" space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 justify-items-center">

                <Menu
                    title={'Projects'}
                    subtitle={'Web / Mobile application'}
                    svgPath={<ProjectSVGPath />}
                    link={'projects'}
                />

                <Menu
                    title={'About'}
                    subtitle={'Experience / Skills / Education'}
                    svgPath={<AboutSVGPath />}
                    link={'about'}
                />
                <Menu
                    title={'Labs'}
                    subtitle={'🚧'}
                    svgPath={<LabSVGPath />}
                    link={'labs'}
                />
                <Menu
                    title={'Contact'}
                    subtitle={'Email / Github / Facebook'}
                    svgPath={<ContactSVGPath />}
                    link={'contact'}
                />
            </dl>

        </div>
    )
}

export default Contents
