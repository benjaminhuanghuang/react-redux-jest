import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from '../CommentBox';


// Use 'describe' to group together similar tests
describe('App', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<CommentBox />);
    });
    afterEach(()=>{
        wrapped.unmount();
    });
    
    it('shows a comment box', () => {
        expect(wrapped.find(CommentBox).length).toEqual(1);
    });

    it('shows a comment list', () => {
        expect(wrapped.find(CommentList).length).toEqual(1);
    });
});