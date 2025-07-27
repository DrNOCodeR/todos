import React from 'react';

type Filter = 'all' | 'active' | 'completed';

interface TodoFooterProps {
  activeCount: number;
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
  onClearCompleted: () => void;
  hasCompleted: boolean;
}

const TodoFooter: React.FC<TodoFooterProps> = ({
  activeCount,
  currentFilter,
  onFilterChange,
  onClearCompleted,
  hasCompleted,
}) => {
  return (
    <div className="todo-footer">
      <span>{activeCount} items left</span>

      <div className="filters">
        <button
          className={currentFilter === 'all' ? 'active' : ''}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={currentFilter === 'active' ? 'active' : ''}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={currentFilter === 'completed' ? 'active' : ''}
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </button>
      </div>

      {hasCompleted && (
        <button className="clear-btn" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoFooter;
