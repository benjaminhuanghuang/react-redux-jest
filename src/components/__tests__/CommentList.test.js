import React from 'react';
import { shallow, mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from '../../Root';
import { wrap } from 'module';


// Use 'describe' to group together similar tests
describe('CommentList', () => {
    let wrapped;

    beforeEach(() => {
        const initialState = {
            comments: ['Comment 1', 'Comment 2']
        }
        wrapped = mount(<Root initialState={initialState}><CommentList /></Root>);
    });
    afterEach(() => {
        wrapped.unmount();
    });


    it('creates one LI per comment', () => {
        expect(wrapped.find('li').length).toEqual(2);
    });

    it('show the text for each comment', () => {
        expect(wrapped.render().text()).toContain('Comment 1');
        expect(wrapped.render().text()).toContain('Comment 2');
    });

    // describe('the text area', () => {
    //     beforeEach(() => {
    //         wrapped.find('textarea').simulate('change', {

    //     });
    //     it('has a text area that users can type in', () => {

    //     });

    //     it('when form is submitted, text area gets emptied', () => {

    //     });
    // });
});