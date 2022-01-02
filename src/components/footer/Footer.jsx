import "./footer.scss";

export default function Footer() {
    return (
        <footer class="site-footer">
        <div class="container">
            <h3>That's all on this page folks!</h3>
            <ul class="social-icons">
                <li><a class="facebook" href="https://www.facebook.com/shashwat444/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f" id="socIcon"></i></a></li>
                <li><a class="instagram" href="https://www.instagram.com/doshiascharged/" target="_blank" rel="noreferrer"><i class="fab fa-instagram" id="socIcon"></i></a></li>
                <li><a class="linkedin" href="https://www.linkedin.com/in/shashwatdoshi/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in" id="socIcon"></i></a></li>
                <li><a class="github" href="https://github.com/shashwat-doshi" target="_blank" rel="noreferrer"><i class="fab fa-github" id="socIcon"></i></a></li>
            </ul>

            <em>"The people who are crazy enough to think that they can change the world are the ones who do."</em><em className="quoteAuthor"> ~ Steve Jobs</em>

            <div className="madebyFooter">
                <p class="copyright-text"> Made by Shashwat Doshi using React <i class="fab fa-react" id="ReactIcon"></i>
                </p>
            </div>
        </div>
    </footer>
    )
}
