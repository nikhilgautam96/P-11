# Forms in Html written Semantically :-





















1. Form Attributes :

        Action Attribute - The action attribute defines the action to be performed when the form is submitted.
                           Usually, the form data is sent to a file on the server when the form is submitted.
                           If the action attribute is omitted, the action is set to the current page.

        eg : <form action="/action_page.php">
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname" value="John"><br>
                <label for="lname">Last name:</label><br>
                <input type="text" id="lname" name="lname" value="Doe"><br><br>
                <input type="submit" value="Submit">
             </form>
        
             
        Target Attribute - The target attribute specifies where to display the response that is received 
                                after submitting the form.

        <form action="/action_page.php" target="_blank"> 
                target = (_blank, _self, _top, _parent, frameName) | "frameName" is any "iframe" name.

        Method Attribute - 
                get : <form action="/action_page.php" method="get"></form>
                        Appends the form data to the URL, in name/value pairs
                        NEVER use GET to send sensitive data! (the submitted form data is visible in the URL!)
                        The length of a URL is limited (2048 characters)
                        Useful for form submissions where a user wants to bookmark the result
                        GET is good for non-secure data, like query strings in Google.
                post : <form action="/action_page.php" method="post"></form>
                        Appends the form data inside the body of the HTTP request (the submitted form data is not shown in the URL)
                        POST has no size limitations, and can be used to send large amounts of data.
                        Form submissions with POST cannot be bookmarked.
                        Always use POST if the form data contains sensitive or personal information.

        Autocomplete Attribute -  <form action="/action_page.php" autocomplete="on"></form>
                        The autocomplete attribute specifies whether a form should have autocomplete on or off.
                        When autocomplete is on, the browser automatically complete values based on values 
                           that the user has entered before.
                        
        Novalidate Attribute -  <form action="/action_page.php" novalidate></form>
                The novalidate attribute is a boolean attribute.
                When present, it specifies that the form-data (input) should not be validated when submitted.

                Validate form -  HTML form validation is a process of examining the HTML form page’s contents 
                                 to avoid errored-out data being sent to the server.
                                 This can be done in two ways - 
                                        1. html required attribute, set the length of the data, 
                                                set a restriction on the values of the data, etc.
                                        2. using javascript.



2. The HTML <form> element can contain one or more of the following form elements:

    <input>     -
    <label>     - defines a label for several form elements.
    <select>    - defines a drop-down list
                    <label for="cars">Choose a car:</label>
                    <select id="cars" name="cars" size="3" multiple>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>

                    "size" attribute to specify the number of visible values.
                    "multiple" attribute to allow the user to select more than one value.

    <textarea>  -
    <button>    -

    <fieldset>  - is used to group related data in a form.
    <legend>    - defines a caption for the <fieldset> element.
        
    <datalist>  - element specifies a list of pre-defined options for an <input> element.

                  The list attribute of the <input> element, must refer to the id attribute 
                  of the <datalist> element.

                    <form action="/action_page.php">
                        <input list="browsers">
                            <datalist id="browsers">
                                <option value="Internet Explorer">
                                <option value="Firefox">
                                <option value="Chrome">
                                <option value="Opera">
                                <option value="Safari">
                        </datalist>
                    </form>          
    <output>    - represents the result of a calculation (like one performed by a script).
    <option>    -
    <optgroup>  -