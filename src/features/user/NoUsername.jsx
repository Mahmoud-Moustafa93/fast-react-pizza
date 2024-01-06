import LinkButton from "../../ui/LinkButton";

function NoUsername() {
    return (
        <div className="px-4 py-3">
            <LinkButton to="/">&larr; Back to home</LinkButton>

            <p className="mt-7 font-semibold">
                You haven't entered your name yet. Please enter your name first
                and start adding some pizzas 🍕😋
            </p>
        </div>
    );
}

export default NoUsername;
