import { Children, ReactNode } from "react";

function RenderEach<D>({
    render,
    of,
}: {
    render: (item: D, index: number) => ReactNode;
    of: D[];
}) {
    return (
        <>
            {Children.toArray(
                of.map((item, index) => {
                    return render(item, index);
                })
            )}
        </>
    );
};

export default RenderEach;
