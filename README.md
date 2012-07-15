charcount
=========

Character counter for HTML input and textarea fields. The count is updated on the keyup event for 
the element the plugin is attached to. Requires jQuery 1.6 or higher.

Usage
=====
Basic usage requires the input/textarea field to have a "maxlength" attribute set. A "span" 
element with class "charcount" will be added after the input field and will display the current
number of characters and the maximum like so: "count / max". Instantiate plugin like so:
    
    $(element).characount();

An options object can be passed in during instatiation to customise. See the next section for 
details.


Options
=======
The properties can be set during instatiation of the plugin. The template, the element in the DOM
to add the count to, and the maximum count. 

<table>
    <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>tmpl</td>
        <td>string</td>
        <td>
          Template fields are {count} - the current number of characters in the element, {max} - 
          the maximum, {remaining} - maximum minus current number of characters. The default 
          template is "{count}/{max}".
        </td>
    </tr>
    <tr>
        <td>max</td>
        <td>integer</td>
        <td>
          The maximum number of characters allowed in this element. Will override the "maxlength"
          attribute.
        </td>
    </tr>
    <tr>
        <td>appendTo</td>
        <td>jQuery object</td>
        <td>
          Element to add the count template to.
        </td>
    </tr>
</table>

Example with options:

    $('textarea').characount({
      max: 200,
      appendTo: $(otherElement),
      tmpl: "{remaining}"
    });
