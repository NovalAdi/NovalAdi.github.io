//about
const observer_about = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.about-title');
        const line1 = entry.target.querySelector('.line1');
        const line2 = entry.target.querySelector('.line2');
        const img_border = entry.target.querySelector('.img-about');

        if (entry.isIntersecting) {
            title.classList.add('title-animation');
            line1.classList.add('line-animation');
            line2.classList.add('line-animation');
            img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        title.classList.remove('title-animation');
        line1.classList.remove('line-animation');
        line2.classList.remove('line-animation');
        img_border.classList.remove('border-img-animation');
    });
});
observer_about.observe(document.querySelector('.container-about'));

//experience title
const observer_experience_title = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.experience-title');
        const line1 = entry.target.querySelector('.line1');
        const line2 = entry.target.querySelector('.line2');

        if (entry.isIntersecting) {
            title.classList.add('title-animation');
            line1.classList.add('line-animation');
            line2.classList.add('line-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        title.classList.remove('title-animation');
        line1.classList.remove('line-animation');
        line2.classList.remove('line-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_experience_title.observe(document.querySelector('.container-title-experience'));

//experience 1
const observer_experience_1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const img_experience = entry.target.querySelector('.img-experience-1');
        const experience_no_1 = entry.target.querySelector('.experience-no-1');

        if (entry.isIntersecting) {
            experience_no_1.classList.add('title-animation');
            img_experience.classList.add('border-img-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        experience_no_1.classList.remove('title-animation');
        img_experience.classList.remove('border-img-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_experience_1.observe(document.querySelector('.experience-1'));

//experience 2
const observer_experience_2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const img_experience = entry.target.querySelector('.img-experience-2');
        const experience_no_2 = entry.target.querySelector('.experience-no-2');

        if (entry.isIntersecting) {
            experience_no_2.classList.add('title-animation');
            img_experience.classList.add('border-img-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        experience_no_2.classList.remove('title-animation');
        img_experience.classList.remove('border-img-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_experience_2.observe(document.querySelector('.experience-2'));

//projects title
const observer_projects_title = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.projects-title');
        const line1 = entry.target.querySelector('.line1');
        const line2 = entry.target.querySelector('.line2');

        if (entry.isIntersecting) {
            title.classList.add('title-animation');
            line1.classList.add('line-animation');
            line2.classList.add('line-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        title.classList.remove('title-animation');
        line1.classList.remove('line-animation');
        line2.classList.remove('line-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_projects_title.observe(document.querySelector('.container-title-projects'));

//projects 1
const observer_projects_1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.p-title-1');
        const content = entry.target.querySelector('.p-content-1');

        if (entry.isIntersecting) {
            title.classList.add('title-animation');
            content.classList.add('border-img-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        title.classList.remove('title-animation');
        content.classList.remove('border-img-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_projects_1.observe(document.querySelector('.p-1'));

//projects right 1
const observer_projects_right_1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title_right = entry.target.querySelector('.p-title-right-1');
        const content_right = entry.target.querySelector('.p-content-right-1');

        if (entry.isIntersecting) {
            title_right.classList.add('title-animation');
            content_right.classList.add('border-img-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        title_right.classList.remove('title-animation');
        content_right.classList.remove('border-img-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_projects_right_1.observe(document.querySelector('.p-right-1'));

//projects right 2
const observer_projects_right_2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title_right = entry.target.querySelector('.p-title-right-2');
        const content_right = entry.target.querySelector('.p-content-right-2');

        if (entry.isIntersecting) {
            title_right.classList.add('title-animation');
            content_right.classList.add('border-img-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        title_right.classList.remove('title-animation');
        content_right.classList.remove('border-img-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_projects_right_2.observe(document.querySelector('.p-right-2'));

//projects 3
const observer_projects_3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.p-title-3');
        const content = entry.target.querySelector('.p-content-3');

        if (entry.isIntersecting) {
            title.classList.add('title-animation');
            content.classList.add('border-img-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        title.classList.remove('title-animation');
        content.classList.remove('border-img-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_projects_3.observe(document.querySelector('.p-3'));

//projects right 3
const observer_projects_right_3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title_right = entry.target.querySelector('.p-title-right-3');
        const content_right = entry.target.querySelector('.p-content-right-3');

        if (entry.isIntersecting) {
            title_right.classList.add('title-animation');
            content_right.classList.add('border-img-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        title_right.classList.remove('title-animation');
        content_right.classList.remove('border-img-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_projects_right_3.observe(document.querySelector('.p-right-3'));

//projects right 4
const observer_projects_right_4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title_right = entry.target.querySelector('.p-title-right-4');
        const content_right = entry.target.querySelector('.p-content-right-4');

        if (entry.isIntersecting) {
            title_right.classList.add('title-animation');
            content_right.classList.add('border-img-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        title_right.classList.remove('title-animation');
        content_right.classList.remove('border-img-animation');
        //img_border.classList.remove('border-img-animation');
    });
});
observer_projects_right_4.observe(document.querySelector('.p-right-4'));

//line
const line = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const line = entry.target.querySelector('.line');

        if (entry.isIntersecting) {
            line.classList.add('line-animation');
            // img_border.classList.add('border-img-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        line.classList.remove('line-animation');
        //img_border.classList.remove('border-img-animation');
    });
});

line.observe(document.querySelector('.container-contact'));