export interface Game {
    id?: string;
    bannerUrl: string;
    title: string;
    _count: {
        ads: number
    };
}

function GameCard({ bannerUrl, title, _count }: Game){
    return (
        <a href="" className="relative rounded-lg overflow-hidden" >
                <img src={ bannerUrl } alt="" />
                <div className="w-full pt- pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                    <strong className="font-bold text-white block">{ title }</strong>
                    <span className="text-zinc-300 text-sm block">{ `${ _count.ads } anúncio(s)`}</span>
                </div>
        </a>
    );
}

export default GameCard;