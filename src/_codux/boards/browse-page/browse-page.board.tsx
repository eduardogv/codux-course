import { createBoard } from '@wixc3/react-board';
import { BrowsePage } from '../../../components/browse-page/browse-page';

export default createBoard({
    name: 'BrowsePage',
    Board: () => <BrowsePage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1269,
        windowHeight: 858,
        canvasWidth: 1167,
    },
});
