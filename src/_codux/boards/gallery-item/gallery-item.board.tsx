import { createBoard } from '@wixc3/react-board';
import { GalleryItem } from '../../../components/gallery-item/gallery-item';

export default createBoard({
    name: 'GalleryItem',
    Board: () => <GalleryItem />,
    isSnippet: true,
});
