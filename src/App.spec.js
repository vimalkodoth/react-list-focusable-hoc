import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import expect from 'expect';


const CoolComponent = ({greeting = 'hello'}) => (
	<h1>{greeting}</h1>
);

describe('CoolComponent', () => {
	
	let container = null;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	})
	

	it('should ...', () => {
		act(() => {
			render(<CoolComponent />, container);
		});
		  expect(
    pretty(container.innerHTML)
  ).toMatchInlineSnapshot();
		act(() => {
			render(<CoolComponent greeting="hello1"/>, container);
		});
		  expect(
    pretty(container.innerHTML)
  ).toMatchInlineSnapshot();
		act(() => {
			render(<CoolComponent greeting="hello2"/>, container);
		});
		  expect(
    pretty(container.innerHTML)
  ).toMatchInlineSnapshot();
	})
})