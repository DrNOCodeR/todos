import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

const mockTodo: Todo = {
  id: 1,
  text: 'Протестировать компонент',
  completed: false,
};

describe('TodoItem', () => {
  it('вызывает onToggle при клике на чекбокс', () => {
    const onToggle = jest.fn();
    const onDelete = jest.fn();

    render(<TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onToggle).toHaveBeenCalledWith(1);
  });

  it('вызывает onDelete при клике на крестик', () => {
    const onToggle = jest.fn();
    const onDelete = jest.fn();

    render(<TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onDelete).toHaveBeenCalledWith(1);
  });
});
