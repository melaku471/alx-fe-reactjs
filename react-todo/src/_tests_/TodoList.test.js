import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders TodoList and adds a new todo', () => {
  render(<TodoList />);

  // Check if initial todos are rendered
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Learn Jest')).toBeInTheDocument();

  // Add a new todo
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add'));

  // Check if the new todo is rendered
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<TodoList />);

  const todo = screen.getByText('Learn React');
  expect(todo).not.toHaveStyle('text-decoration: line-through');

  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todo);
  expect(todo).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);

  expect(screen.getByText('Learn React')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Delete'));

  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
