import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve verificar se foram feitos dois comentários', () => {
        render(<Post />)

        const commentTextarea = screen.getByTestId('comment-textarea')
        const commentButton = screen.getByTestId('comment-button')

        fireEvent.change(commentTextarea, {
            target: {
                value: 'Primeiro comentario'
            }
        })
        fireEvent.click(commentButton)

        fireEvent.change(commentTextarea, {
            target: {
                value: 'Segundo comentario'
            }
        })
        fireEvent.click(commentButton)

        const countElements = screen.getAllByTestId('post-comment-content')
        expect(countElements).toHaveLength(2)
        expect(countElements[0]).toHaveTextContent('Primeiro comentario')
        expect(countElements[1]).toHaveTextContent('Segundo comentario')
    })
});
