import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, f as renderSlot, m as maybeRenderHead, g as addAttribute, h as renderHead } from '../chunks/astro/server_DjVlc1MF.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { $ as $$Image } from '../chunks/_astro_assets_DRsAQBOg.mjs';
/* empty css                                 */
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Sun, Moon } from 'lucide-react';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$8 = createAstro();
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const { class: className, as: Tag = "div", title, href, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-row items-center justify-center gap-x-2",
    href && "hover:bg-opacity-70 transition-all"
  ), "href": href, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon"])} ${maybeRenderHead()}<span class="sr-only">${title}</span> ` })}`;
}, "/Users/nick/Developer/portfolio-resume/src/components/ExternalLink.astro", void 0);

const $$Astro$7 = createAstro();
const $$ImageCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ImageCard;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-image-container " data-astro-cid-5ac3tuzn> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "quality": 100, "class": "w-28 h-28 object-cover rounded-full border-2 border-slate-100 hover:border-slate-200 dark:border-white/5 dark:hover:border-white/10 shadow-black/80 glow:border-glow", "data-astro-cid-5ac3tuzn": true })} </div> `;
}, "/Users/nick/Developer/portfolio-resume/src/components/ImageCard.astro", void 0);

const profileImg = new Proxy({"src":"/_astro/profile_img.Va2M21xu.jpg","width":184,"height":245,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nick/Developer/portfolio-resume/public/imgs/profile_img.jpg";
							}
							
							return target[name];
						}
					});

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$ProfileCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div id="open-dialog" class="group relative glow-capture"> <div class="w-full max-w-lg p-10 border-2\n    bg-slate-100/50 hover:bg-slate-200/50 border-slate-100 hover:border-slate-200\n    dark:bg-zinc-900/20 dark:hover:bg-zinc-800/20 dark:border-white/5 dark:hover:border-white/10\n    rounded-2xl shadow-black/80 \n    flex md:flex-row-reverse flex-col flex-wrap md:items-start items-center md:justify-between justify-center\n    glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]\n    "> <div class="flex-1 md:order-1 order-2 flex-col w-full"> <div class="justify-between flex"> <div class="italic opacity-80 flex flex-col"> <p class="text-sm mb-1 glow:text-glow/[.15]">Aspiring Software Engineer</p> <p class="text-sm mb-1 glow:text-glow/[.15]">Interest in Compilers</p> <p class="text-sm glow:text-glow/[.15]">McGill Graduate</p> </div> ', ' </div> <div class=" pt-6 flex items-end align-baseline space-x-40"> <div class=""> <p class="text-sm mb-1 italic opacity-75">contacts: </p> <div class="flex flex-wrap space-x-2"> <!-- Mail --> ', " <!-- Github --> ", " <!-- LinkedIn --> ", ' </div> </div> <h1 class="text-2xl font-medium">Youngsun Yoo</h1> </div> </div> <div class="glow-overlay" style="--glow-color: #777779" )></div> </div> <!-- Tooltip for Experience & Projects --> <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto"> <div class="bottom-full right-0 rounded-xl bg-transparent px-5 py-2 text-md whitespace-nowrap"> <span class="glow:text-glow/[.15]">Click to see Experience & Projects</span> <svg class="absolute left-0 top-full h-2 w-full text-transparent" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"></polygon></svg> </div> </div> </div> <script>\n    document.addEventListener("DOMContentLoaded", () => {\n        const captures = document.querySelectorAll(".glow-capture");\n\n        if (captures.length) {\n            captures.forEach(capture => {\n                // Clone the child element.\n                const clonedChild = capture.cloneNode(true);\n                const overlay = capture.querySelector(".glow-overlay");\n\n                // Append cloned child to overlay\n                overlay.appendChild(clonedChild);\n\n                capture.addEventListener("mousemove", (event) => {\n                    const x = event.pageX - capture.offsetLeft;\n                    const y = event.pageY - capture.offsetTop;\n\n                    overlay.style.setProperty("--glow-x", `${x}px`);\n                    overlay.style.setProperty("--glow-y", `${y}px`);\n                    overlay.style.setProperty("--glow-opacity", "1");\n                })\n\n                capture.addEventListener("mouseleave", (event) => {\n                    overlay.style.setProperty("--glow-opacity", "0");\n                })\n            })\n        }\n    })\n<\/script>'], ["", '<div id="open-dialog" class="group relative glow-capture"> <div class="w-full max-w-lg p-10 border-2\n    bg-slate-100/50 hover:bg-slate-200/50 border-slate-100 hover:border-slate-200\n    dark:bg-zinc-900/20 dark:hover:bg-zinc-800/20 dark:border-white/5 dark:hover:border-white/10\n    rounded-2xl shadow-black/80 \n    flex md:flex-row-reverse flex-col flex-wrap md:items-start items-center md:justify-between justify-center\n    glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]\n    "> <div class="flex-1 md:order-1 order-2 flex-col w-full"> <div class="justify-between flex"> <div class="italic opacity-80 flex flex-col"> <p class="text-sm mb-1 glow:text-glow/[.15]">Aspiring Software Engineer</p> <p class="text-sm mb-1 glow:text-glow/[.15]">Interest in Compilers</p> <p class="text-sm glow:text-glow/[.15]">McGill Graduate</p> </div> ', ' </div> <div class=" pt-6 flex items-end align-baseline space-x-40"> <div class=""> <p class="text-sm mb-1 italic opacity-75">contacts: </p> <div class="flex flex-wrap space-x-2"> <!-- Mail --> ', " <!-- Github --> ", " <!-- LinkedIn --> ", ' </div> </div> <h1 class="text-2xl font-medium">Youngsun Yoo</h1> </div> </div> <div class="glow-overlay" style="--glow-color: #777779" )></div> </div> <!-- Tooltip for Experience & Projects --> <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto"> <div class="bottom-full right-0 rounded-xl bg-transparent px-5 py-2 text-md whitespace-nowrap"> <span class="glow:text-glow/[.15]">Click to see Experience & Projects</span> <svg class="absolute left-0 top-full h-2 w-full text-transparent" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"></polygon></svg> </div> </div> </div> <script>\n    document.addEventListener("DOMContentLoaded", () => {\n        const captures = document.querySelectorAll(".glow-capture");\n\n        if (captures.length) {\n            captures.forEach(capture => {\n                // Clone the child element.\n                const clonedChild = capture.cloneNode(true);\n                const overlay = capture.querySelector(".glow-overlay");\n\n                // Append cloned child to overlay\n                overlay.appendChild(clonedChild);\n\n                capture.addEventListener("mousemove", (event) => {\n                    const x = event.pageX - capture.offsetLeft;\n                    const y = event.pageY - capture.offsetTop;\n\n                    overlay.style.setProperty("--glow-x", \\`\\${x}px\\`);\n                    overlay.style.setProperty("--glow-y", \\`\\${y}px\\`);\n                    overlay.style.setProperty("--glow-opacity", "1");\n                })\n\n                capture.addEventListener("mouseleave", (event) => {\n                    overlay.style.setProperty("--glow-opacity", "0");\n                })\n            })\n        }\n    })\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "ImageCard", $$ImageCard, { "src": profileImg, "alt": "graduation-photo" }), renderComponent($$result, "ExternalLink", $$ExternalLink, { "title": "Mail", "as": "a", "href": `mailto:youngsun123q@gmail.com` }, { "icon": ($$result2) => renderTemplate`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"> <path fill="currentColor" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path> </svg>` }), renderComponent($$result, "ExternalLink", $$ExternalLink, { "title": "Github", "as": "a", "href": "https://github.com/youngsun4786", "target": "_blank", "rel": "noopener noreferrer" }, { "icon": ($$result2) => renderTemplate`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"> <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path> </svg>` }), renderComponent($$result, "ExternalLink", $$ExternalLink, { "title": "LinkedIn", "as": "a", "href": "https://www.linkedin.com/in/youngsunyoo/", "target": "_blank", "rel": "noopener noreferrer" }, { "icon": ($$result2) => renderTemplate`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"> <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg>` }));
}, "/Users/nick/Developer/portfolio-resume/src/components/ProfileCard.astro", void 0);

const $$Astro$6 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(className, "flex flex-col gap-y-5 md:flex-row md:gap-y-0"), "class")}> <div class="text-xl font-semibold md:w-1/3"> <h2>${title}</h2> </div> <div class="flex flex-col gap-y-3 md:w-2/3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/nick/Developer/portfolio-resume/src/components/Section.astro", void 0);

const $$Astro$5 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    as: Tag = "div",
    class: className,
    href,
    heading,
    subheading,
    date,
    imagePath,
    altText,
    imageClass,
    link
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/SDPlex.png": () => import('../chunks/SDPlex_SF4XUyQ7.mjs'),"/src/assets/UAEM.jpeg": () => import('../chunks/UAEM_9mqJx8ea.mjs'),"/src/assets/coming-soon.png": () => import('../chunks/coming-soon_wUPauGOz.mjs'),"/src/assets/flojoy.png": () => import('../chunks/flojoy_BMHozGl3.mjs'),"/src/assets/mcgill.jpeg": () => import('../chunks/mcgill_DKbvFyUl.mjs')});
  if (imagePath) {
    if (!images[imagePath])
      throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  }
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "relative rounded-2xl border border-border bg-primary-foreground px-5 py-3",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate`${imagePath && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": cn("mb-3 md:absolute md:mb-0", imageClass), "loading": "eager" })}`}${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> <div class="flex flex-col gap-y-0.5"> <a${addAttribute(link, "href")} target="_blank" class="outline-none flex items-center gap-1"> <h1 class="text-lg font-medium">${heading}</h1> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg> </a> <h2 class="text-muted-foreground">${subheading}</h2> <h2 class="text-muted-foreground">${date}</h2> </div> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/nick/Developer/portfolio-resume/src/components/Card.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/SDPlex.png": () => import('../chunks/SDPlex_SF4XUyQ7.mjs'),"/src/assets/UAEM.jpeg": () => import('../chunks/UAEM_9mqJx8ea.mjs'),"/src/assets/coming-soon.png": () => import('../chunks/coming-soon_wUPauGOz.mjs'),"/src/assets/flojoy.png": () => import('../chunks/flojoy_BMHozGl3.mjs'),"/src/assets/mcgill.jpeg": () => import('../chunks/mcgill_DKbvFyUl.mjs')});
  if (!images[imagePath])
    throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": "h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover", "loading": "eager" })} ${maybeRenderHead()}<div class="flex flex-col gap-y-0.5 px-5 py-4"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/nick/Developer/portfolio-resume/src/components/ProjectCard.astro", void 0);

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$ProfileModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<!-- OVERLAY -->", '<div id="overlay" class="pointer-events-auto fixed inset-0 z-40 hidden items-center justify-center bg-slate-100 bg-opacity-100 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> <!-- MODAL --> <dialog id="dialog" class="z-50 mt-4 h-5/6 max-w-[60rem] overflow-y-scroll rounded-lg px-10 py-6 shadow-lg dark:bg-zinc-900/50 dark:text-zinc-50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:rounded-full dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:w-2"> <div class="flex w-full flex-col gap-y-10"> ', " ", ' <div class="flex items-center justify-center"> <!-- CLOSE BUTTON --> ', " </div> </div> </dialog> </div> ", " <script>\n	const overlay = document.getElementById('overlay')\n	const dialog = document.getElementById('dialog')\n	const dialogOpen = document.getElementById('open-dialog')\n	const dialogClose = document.getElementById('close-dialog')\n\n	dialogOpen.addEventListener('click', openDialog)\n\n	dialogClose.addEventListener('click', closeDialog)\n\n	function openDialog() {\n		overlay.classList.remove('hidden')\n		overlay.classList.add('flex')\n		dialogOpen.classList.add('pointer-events-none')\n		dialog.show()\n		dialog.addEventListener('click', closeDialogOnClickOutside)\n	}\n\n	function closeDialog() {\n		overlay.classList.add('hidden')\n		overlay.classList.remove('flex')\n		dialogOpen.classList.remove('pointer-events-none')\n		dialog.close()\n		dialog.removeEventListener('click', closeDialogOnClickOutside)\n	}\n\n	function closeDialogOnClickOutside(event) {\n		event.target === closeDialog()\n	}\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Section", $$Section, { "title": "Experience" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, { "heading": "McGill University", "subheading": "Research Intern", "date": "May 2024 - Aug 2024", "imagePath": "/src/assets/mcgill.jpeg", "altText": "McGill - Research Intern", "imageClass": "h-12 w-auto md:-left-16", "link": "https://www.cs.mcgill.ca/~jvybihal/index.php?Page=Research" })} ${renderComponent($$result2, "Card", $$Card, { "heading": "UAEM", "subheading": "Web Developer", "date": "Oct 2023 - Present", "imagePath": "/src/assets/UAEM.jpeg", "altText": "UAEM - Web Developer", "imageClass": "h-12 w-12 md:-left-16", "link": "https://www.uaem.org/" })} ${renderComponent($$result2, "Card", $$Card, { "heading": "Flojoy", "subheading": "Software Developer Intern", "date": "May 2023 - Dec 2023", "imagePath": "/src/assets/flojoy.png", "altText": "Flojoy - Software Developer Intern", "imageClass": "h-12 w-auto md:-left-16", "link": "https://www.flojoy.ai" })} ${renderComponent($$result2, "Card", $$Card, { "heading": "SDPLEX (acquired)", "subheading": "Software Engineer Intern", "date": "May 2022 - Aug 2022", "imagePath": "/src/assets/SDPlex.png", "altText": "SDPLEX - Software Engineer Intern", "imageClass": "h-12 w-auto md:-left-16", "link": "http://www.sdplex.com/html/01_about.html" })} ` }), renderComponent($$result, "Section", $$Section, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col gap-y-3 sm:flex-row sm:gap-x-3 sm:gap-y-0"> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "href": "https://www.google.com", "heading": "Consectetur", "subheading": "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "imagePath": "/src/assets/coming-soon.png", "altText": "Example", "class": "w-full sm:w-1/2" })} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "as": "div", "heading": "Coming soon...", "subheading": "", "imagePath": "/src/assets/coming-soon.png", "altText": "Lorem, ipsum dolor sit", "class": "w-full sm:w-1/2" })} </div> ` }), renderComponent($$result, "Button", Button, { "id": "close-dialog", "variant": "outline" }, { "default": ($$result2) => renderTemplate`close` }), renderComponent($$result, "ProfileCard", $$ProfileCard, { "id": "open-dialog" }));
}, "/Users/nick/Developer/portfolio-resume/src/components/ProfileModal.astro", void 0);

const $$Astro$3 = createAstro();
const $$SkillSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkillSection;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(className, "flex flex-col gap-y-5 md:gap-y-0 md:flex-col"), "class")}> <div class="text-xl font-semibold md:pb-6 pb-1"> <h2>${title}</h2> </div> <div class="flex flex-col gap-y-5"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/nick/Developer/portfolio-resume/src/components/SkillSection.astro", void 0);

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

const $$Astro$2 = createAstro();
const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0"> <h3 class="w-1/6 font-normal">${title}</h3> <div class="flex flex-row flex-wrap gap-x-4 gap-y-2 md:w-5/6"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Badge", Badge, { "className": "font-light", "variant": "outline" }, { "default": ($$result2) => renderTemplate`${skill}` })}`)} </div> </div>`;
}, "/Users/nick/Developer/portfolio-resume/src/components/SkillLayout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="fixed inset-x-0 bottom-0 mx-auto w-full py-4 text-center text-sm text-gray-500 font-light"> <p>&copy; 2024 Youngsun Yoo. All rights reserved.</p> </footer>`;
}, "/Users/nick/Developer/portfolio-resume/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ToggleButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", " <script>\n    // const theme = (() => {\n    //   if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n    //     return localStorage.getItem('theme')\n    //   }\n    //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n    //     return 'dark'\n    //   }\n    //   return 'light'\n    // })()\n  \n    // if (theme === 'light') {\n    //   document.documentElement.classList.remove('dark')\n    // } else {\n    //   document.documentElement.classList.add('dark')\n    // }\n  \n    // window.localStorage.setItem('theme', theme)\n  \n    const handleToggleClick = () => {\n      const element = document.documentElement\n      element.classList.toggle('dark')\n  \n      const isDark = element.classList.contains('dark')\n      localStorage.setItem('theme', isDark ? 'dark' : 'light')\n    }\n  \n    document\n      .getElementById('themeToggle')\n      .addEventListener('click', handleToggleClick)\n  <\/script>"])), renderComponent($$result, "Button", Button, { "variant": "ghost", "size": "icon", "id": "themeToggle" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Sun", Sun, { "className": "h-[1.5rem] w-[1.3rem] dark:hidden" })} ${renderComponent($$result2, "Moon", Moon, { "className": "hidden h-5 w-5 dark:block" })} ${maybeRenderHead()}<span class="sr-only">Toggle theme</span> ` }));
}, "/Users/nick/Developer/portfolio-resume/src/components/ToggleButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="my-4 sticky top-0 z-50 w-full"> <div class=" mx-auto px-2 w-full flex h-16 items-center space-x-4 justify-end sm:space-x-0 lg:flex-row"> <nav class="flex items-center space-x-1"> ${renderComponent($$result, "ToggleButton", $$ToggleButton, {})} </nav> </div> </header>`;
}, "/Users/nick/Developer/portfolio-resume/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n    const theme = localStorage.getItem('theme');\n   \n    if (\n      theme === 'dark' ||\n      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      document.documentElement.classList.add('dark');\n    }\n  <\/script>"])));
}, "/Users/nick/Developer/portfolio-resume/src/components/ThemeProvider.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "ThemeProvider", $$ThemeProvider, {})}<meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="mx-auto top-0 z-[-2] w-screen h-screen max-w-screen-md items-center justify-center font-switzer
	bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] text-zinc-900
	 dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:text-zinc-50 overflow-hidden"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/nick/Developer/portfolio-resume/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const languages = [
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Java",
    "Golang",
    "Python",
    "C",
    "C++",
    "PHP",
    "OCaml"
  ];
  const frontend = ["React", "Angular", "Next.js", "Astro", "Tailwind CSS", "shadcn-UI"];
  const backend = ["Node.js", "Express", "FastAPI", "Django", "Gin"];
  const databases = ["PostgreSQL", "MySQL", "MongoDB", "Firebase"];
  const others = [
    "Docker",
    "Git",
    "Gitlab",
    "GitHub Actions",
    "AWS",
    "Azure"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Youngsun Yoo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-grow flex flex-col items-center justify-center gap-y-10"> ${renderComponent($$result2, "Profile", $$ProfileModal, {})} <div class="flex flex-col"> ${renderComponent($$result2, "SkillSection", $$SkillSection, { "class": "md:pl-8", "title": "Skills" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Languages", "skills": languages })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Frontend Stack", "skills": frontend })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Backend Stack", "skills": backend })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Databases", "skills": databases })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Others", "skills": others })} ` })} </div> </main> ` })}`;
}, "/Users/nick/Developer/portfolio-resume/src/pages/index.astro", void 0);

const $$file = "/Users/nick/Developer/portfolio-resume/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
