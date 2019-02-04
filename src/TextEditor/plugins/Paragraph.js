import { RenderNode } from './helpers';
import { ParagraphNode } from '../Nodes';

const TYPE = 'paragraph';

const Paragraph = options => {
  return RenderNode({ type: TYPE, component: ParagraphNode });
};

export default Paragraph;
