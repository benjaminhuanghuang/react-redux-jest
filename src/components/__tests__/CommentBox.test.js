import React from 'react';
import { shallow, mount } from 'enzyme';

import CommentBox from '../CommentBox';
import Root from '../../Root';


// Use 'describe' to group together similar tests
describe('App', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(<Root><CommentBox /></Root>);
    });
    afterEach(() => {
        wrapped.unmount();
    });


    it('has a text area and a button', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });

    describe('the text area', () => {
        beforeEach(() => {
            wrapped.find('textarea').simulate('change', {
                target: { value: 'new comment' }
            })
            wrapped.update();
        });
        it('has a text area that users can type in', () => {
            expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        });

        it('when form is submitted, text area gets emptied', () => {
            // Can not work if use "shallow" function !
            wrapped.find('form').simulate('submit');
            wrapped.update();
            expect(wrapped.find('textarea').prop('value')).toEqual('');
        });
    })
});