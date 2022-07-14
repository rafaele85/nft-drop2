import {SanityCollection} from "../types";
import {Collection} from "./Collection";

type Props = {
    collection: SanityCollection
}

export const CollectionInfo = (props: Props) => {
    return (
        <Collection collection={props.collection} />
    )
}

