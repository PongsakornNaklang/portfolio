import Menu from "./menu";

const Contents = () => {
    
    return (
        <div className="mt-10">
            <dl className=" space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 justify-items-center">

                <Menu
                    title={'Projects'}
                    subtitle={'Web / Mobile application'}
                    svgPath={
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    }
                    link={'projects'}
                />

                <Menu
                    title={'About'}
                    subtitle={'Experience / Skills / Education'}
                    svgPath={
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    }
                    link={'about'}
                />
                <Menu
                    title={'Labs'}
                    subtitle={'🚧'}
                    svgPath={
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    }
                    link={'labs'}
                />
                <Menu
                    title={'Contact'}
                    subtitle={'Email / Github / Facebook'}
                    svgPath={
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    }
                    link={'contact'}
                />
            </dl>

        </div>
    )
}

export default Contents
