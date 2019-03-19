export default function Contact(){
    return `
    <form action="https://formspree.io/lbattlepro@gmail.com" method="POST">
    <label for="">First Name</label>
    <input type="text" name="fname" id="fname" required>

    <label for="lname">Last Name</label>
    <input type="text" name="last-name" id="lname" required>

    <label for="email">Email</label>
    <input type="email" name="email" id="email" required>

    <label for="tel">Phone</label>
    <input type="tel" name="phone" id="phone">

    <label for="password">Password</label>
    <input type="password" name="text" id="password"> 

    <input type="submit" value="submit">
    <input type="reset" value="clear">
    </form>
    `;
}