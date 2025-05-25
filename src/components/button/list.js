export const ListParentOrdered = () => {
    return (
        <ol>
            <ListItems/>
        </ol>
    );
};
export const ListParentUnordered = () => {
    return (
        <ul>
            <ListItems/>
        </ul>
    );
};
export const ListItems = () => {
    return (
        <div>
            <li>Apple</li>
            <li>Dragon</li>
        </div>
    );
};