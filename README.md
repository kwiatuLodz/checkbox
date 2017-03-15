# Checkbox / radio

Custom checkbox / radio buttons

# Example

include:

```html
<link rel="stylesheet" href="css/styles.css" />
<script src="js/checkbox-jquery.js"></script>
```

html (checkbox):

```html
<div class="checkbox">
	<input type="checkbox" name="check-name-1" id="check-1" />
	<div class="check-content"></div>
	<label for="check-1">
		Lorem ipsum dolor sit amet.
	</label> 
</div>
```

html (radio):

```html
<div class="checkbox radio">
	<input type="radio" name="check-name-1" id="check-1" />
	<div class="check-content"></div>
	<label for="check-1">
		Lorem ipsum
	</label> 
</div>
<div class="checkbox radio">
	<input type="radio" name="check-name-2" id="check-2" />
	<div class="check-content"></div>
	<label for="check-2">
		Minus atque?
	</label> 
</div>
```


js:

```javascript
$('.checkbox').checkbox();
```
