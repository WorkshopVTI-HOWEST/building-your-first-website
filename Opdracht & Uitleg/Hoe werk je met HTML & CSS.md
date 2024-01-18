# Uiteg: wat is HTML en CSS?

## Inleiding over HTML

### Body

Hier komt alle zichtbare inhoud van de webpagina.

```html
<body>
  <!-- Hier komt alle zichtbare inhoud van de webpagina -->
</body>
```

### header

header: Bevat belangrijke informatie bovenaan de pagina, zoals het logo en de navigatie.

```html
<header>
  <!-- Logo en navigatie links -->
</header>
```

### nav

Bevat navigatielinks.

```html
<nav>
  <ul>
    <li><img src="favicon.png" alt="Persoonlijk Logo" /></li>
    <li><a href="#about-me">Over mij</a></li>
    <li><a href="#hobbies">Hobbies</a></li>
  </ul>
</nav>
```

### ul / li

Wordt gebruikt om een lijst met items te maken.

```html
<ul>
  <li>punt 1</li>
  <li>punt 2</li>
  <li>punt 3</li>
</ul>
```

### img

Wordt gebruikt om afbeeldingen weer te geven.

`src` = de locatie van de afbeelding. Dit kan een URL zijn of een pad naar een afbeelding op je computer.

`alt` = de tekst die wordt weergegeven als de afbeelding niet kan worden geladen. Dit is ook belangrijk voor toegankelijkheid bv. voor mensen met een visuele beperking.

```html
<img src="favicon.png" alt="Persoonlijk Logo" />
```

### main

Bevat de hoofdinhoud van de webpagina.

```html
<main>
  <!-- Hier komt de hoofdinhoud van de webpagina -->
</main>
```

### section

Wordt gebruikt om een sectie van de pagina te maken. Een sectie moet minstens een titel hebben met `<h2>` en eventueel een paragraaf met `<p>`.

```html
<section>
  <h2>Over mij</h2>
  <p>
    Ik ben Lukas Olivier, 17 jaar oud en ik woon in Amsterdam. Ik zit op het
    Mediacollege Amsterdam en ik doe de opleiding Software Developer.
  </p>
</section>
```

### h1, h2, h3

Worden gebruikt voor titels en ondertitels.

```html
<h1>Lukas Olivier</h1>
<h2>Over mij</h2>
<h3>Hobby's</h3>
```

### p

Staat voor paragraaf, wordt gebruikt voor tekst.

```html
<p>
  HTML (HyperText Markup Language) is de standaard opmaaktaal voor webpagina's.
</p>
```

### form & input

Worden gebruikt voor het maken van formulieren en invoervelden.

```html
<form>
  <input type="text" placeholder="Voornaam" />
  <input type="text" placeholder="Achternaam" />
  <input type="email" placeholder="E-mailadres" />
  <input type="submit" value="Verstuur" />
</form>
```

### footer

Bevat vaak afsluitende informatie en (meestal) links naar sociale media / contact informatie.

```html
<footer>
  <p>© 2021 Lukas Olivier</p>
  <ul>
    <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
    <li><a href="https://www.instagram.com/">Instagram</a></li>
    <li><a href="https://www.facebook.com/">Facebook</a></li>
  </ul>
</footer>
```

---

## Inleiding over CSS

### CSS Selectoren

`element`: Selecteert alle elementen van een bepaald type

```css
h1 {
  color: red; /* Selecteert alle h1 elementen */
}
```

`element, element`: Selecteert meerdere elementen tergelijk.

```css
main, footer {
  text-align: center; /* Selecteert alle main en footer elementen */
}
```

`element element`: Selecteert alle elementen van een bepaald type die zich binnen een ander element bevinden.

```css
section h1 {
  font-size: 2rem; /* Selecteert alle h1 elementen die zich binnen een section bevinden */
}
```

### CSS Eigenschappen

`color`: Changes the text color.

`font-size`: Changes the size of the font.

`margin-top`: Adds space to the top of the selected element.

`margin-bottom`: Adds space to the bottom of the selected element.

`margin-right`: Adds space to the right of the selected element.

`text-decoration`: Modifies the decoration of text elements (e.g., underline).

`background-color`: Verandert de achtergrondkleur van een element.

`padding`: Voegt ruimte toe aan de binnenkant van het geselecteerde element.

`border`: Voegt een rand toe aan het geselecteerde element.

`border-radius`: Rondt de hoeken van een element af.

`text-align`: Bepaalt de uitlijning van de tekst binnen een element.

`width`: Verandert de breedte van een element.

`height`: Verandert de hoogte van een element.

**Voorbeeld:**

```css
section {
  background-color: #f5f5f5;
  padding: 2rem;
}

h1 {
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
```

### CSS eenheden

`rem` staat voor "root em" en is een eenheid die relatief is aan de fontgrootte van het root-element. Het gebruik van rem zorgt ervoor dat de grootte van tekst en andere elementen wordt geschaald op basis van de root fontgrootte, waardoor het gemakkelijk is om een consistente en schaalbare lay-out te creëren.

Bijvoorbeeld:
  
```css  
h1 {
  font-size: 4rem;
}
```

Je hebt nog veel meer eenheden, zoals `%`, `em`, `vh`, `vw`, etc. Voor deze opdracht is het voldoende om `rem` te gebruiken.

---

## Extra bronnen

- [W3 Schools](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [CSS Tricks](https://css-tricks.com/)