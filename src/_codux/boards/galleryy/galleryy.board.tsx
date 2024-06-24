import { createBoard } from '@wixc3/react-board';
import { Galleryy } from '../../../components/galleryy/galleryy';

export default createBoard({
    name: 'Galleryy',
    Board: () => <Galleryy />,
    isSnippet: true,
});
