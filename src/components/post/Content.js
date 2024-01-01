import { Markup } from "interweave";

const Content = ({ showItem, item, setShowMore, showMore, tags }) => {
    return (
        <>
            <div className=" text-lg text-gray-900 whitespace-normal mt-4 ">
                <Markup content={showItem} />
                {item.content.length > 50 && (
                    <button
                        className="block text-xs underline text-blue-300"
                        onClick={() => setShowMore((state) => !state)}
                    >
                        {showMore ? "show less" : "Show more"}
                    </button>
                )}
            </div>
            <div className="text-xs text-blue-400 whitespace-normal ">
                {tags.join(" ").toString()}
            </div>
        </>
    );
};

export default Content;
