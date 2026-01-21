import type { Block } from '../../types';
import './BlockRenderer.scss';

interface BlockRendererProps {
    block: Block;
}

export const BlockRenderer = ({ block }: BlockRendererProps) => {
    switch (block.type) {
        case 'text':
            return <p className="block-text">{block.content}</p>;

        case 'heading':
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Tag = `h${block.level}` as any;
            return <Tag className={`block-heading block-heading--h${block.level}`}>{block.content}</Tag>;

        case 'divider':
            return <hr className="block-divider" />;

        case 'image':
            return (
                <figure className="block-image">
                    <img src={block.src} alt={block.alt} />
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
            );

        case 'code':
            return (
                <div className="block-code">
                    {block.language && <div className="block-code__lang">{block.language}</div>}
                    <pre>
                        <code>{block.content}</code>
                    </pre>
                </div>
            );

        case 'list':
            const ListTag = block.ordered ? 'ol' : 'ul';
            return (
                <ListTag className="block-list">
                    {block.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ListTag>
            );

        default:
            return null;
    }
};

export default BlockRenderer;
