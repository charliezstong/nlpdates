# NLPDates

Transforms HTML `type date` inputs into a natural language input format without the need for advanced NLP APIs or libraries. It is ideal for static websites; if you plan to use it in modern frontend frameworks, consider integrating it with [`chrono-node`](https://github.com/wanasit/chrono).

### Usage
```html
<script src="nlpdates.js"></script>
<script>
const nlpDates = window.NlpDates();
const parseDateEs = nlpDates.transformEs('Mañana a las 10 am');
console.log(date);
</script>
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/gh/charliezstong/nlpdates/dist/nlpdates.min.js"></script>
```
 
That's it!.