import React from 'react'
import PagesTodoMain from '../../../../../../../src/pages/todo/ui/screens/main';
import { render } from '../../../../../../testsSetup/test-utils';

let addListFunc: Function;
beforeEach(() => {
    addListFunc = jest.fn();
});

describe('Pages Todo Main', () => {
    test('snapshot - Pages Todo Main', () => {
        const tree = render(<PagesTodoMain />);
        expect(tree).toMatchSnapshot();
    });

});
