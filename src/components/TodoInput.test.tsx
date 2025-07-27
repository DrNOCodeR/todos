import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from './TodoInput';

describe('TodoInput', () => {
  it('добавляет задачу при нажатии Enter', () => {
    const onAddMock = jest.fn();

    render(<TodoInput onAdd={onAddMock} />);

    const input = screen.getByPlaceholderText(/добавьте/i);
    fireEvent.change(input, { target: { value: 'Купить хлеб' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(onAddMock).toHaveBeenCalledWith('Купить хлеб');
  });

  it('не добавляет пустую задачу', () => {
    const onAddMock = jest.fn();

    render(<TodoInput onAdd={onAddMock} />);

    const input = screen.getByPlaceholderText(/добавьте/i);
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(onAddMock).not.toHaveBeenCalled();
  });
});
