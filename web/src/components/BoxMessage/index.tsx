interface BoxMessageProps {
    title: string,
    subTitle: string,
    children?: JSX.Element | JSX.Element[];
}

function BoxMessage({ title, subTitle, children }: BoxMessageProps){
    return(
        <>
            <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
                <section className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
                    <div>
                        <strong className="text-white text-2xl font-black block">{ title }</strong>
                        <span className="text-zinc-400 block">{ subTitle }</span>
                    </div>
                    { children }
                </section>    
            </div>
        </>
    )
}

export default BoxMessage;