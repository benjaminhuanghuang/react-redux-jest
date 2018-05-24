## Install 
```
  npm i -D enzyme enzyme-adapter-react-16
```
Create src/setupTests.js to config enzyme. Jest will find and use it.

## Enzyme API
- shallow: render **just** given component and none of its children.
- render: render given component and return plain HTML
- mount: full simulation. can not accsss event in form submit handler function if using shallow.


## Check component existing or not
```
    const wrapped = shallow(<App/>);
    
    expect(wrapped.find(CommentBox).length).toEqual(1);
```