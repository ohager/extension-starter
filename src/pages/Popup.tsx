import {useEffect} from 'react';

export default function () {
    useEffect(() => {
        console.log("Hello from the popup!");
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <img className="h-[200px] w-[200px]" src="/icon-with-shadow.svg" alt="Logo"/>
            <h1 className="w-full text-center text-white font-bold mb-8 text-xl">vite-plugin-web-extension</h1>
            <div className="flex flex-col text-left text-amber-50">
                <div>
                    Template: <code>react-ts</code>
                </div>
                <div>
                    Current Browser: <code>{__APP_INFO__.browser}</code>
                </div>
                <div>
                    TailwindCSS: ✅
                </div>
            </div>
        </div>
    )
}
