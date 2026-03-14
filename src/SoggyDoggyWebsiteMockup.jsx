export default function SoggyDoggyWebsiteMockup() {
  const services = [
    "Bath & Brush",
    "Full Grooming",
    "Sanitary Trim",
    "Nail Trim",
    "Teeth Brushing",
    "Ear Cleaning",
  ];

  const team = [
    { name: "Amber Strong", role: "Groomer" },
    { name: "Leann Smith", role: "Bather" },
    { name: "Sarah Davall", role: "Bather" },
  ];

  const gallery = [
    {
      src: "/images/soggydoggypic1.png",
      title: "Yorkie Style",
      note: "Fresh trim with a fun tie and boutique finish.",
    },
    {
      src: "/images/soggydoggypic2.png",
      title: "Holiday Bandana Look",
      note: "Clean, polished grooming with personality.",
    },
    {
      src: "/images/soggydoggypic3.png",
      title: "Classic Poodle Finish",
      note: "Neat lines, fluffy ears, and a happy smile.",
    },
    {
      src: "/images/soggydoggypic4.png",
      title: "Soft Teddy Bear Cut",
      note: "A gentle rounded look for a sweet finish.",
    },
    {
      src: "/images/soggydoggypic5.png",
      title: "Tiny Boutique Style",
      note: "Styled topknot with a bow and tidy face trim.",
    },
    {
      src: "/images/soggydoggypic6.png",
      title: "Schnauzer Groom",
      note: "Sharp detail work with signature expression.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7fb] text-slate-700">
      <header className="sticky top-0 z-20 border-b border-[#d9d2eb] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-[#e8def7] ring-2 ring-[#efe7f9]">
              <img
                src="/images/soggydoggylogo.jpg"
                alt="Soggy Doggy Grooming logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-[#9b72c7] sm:text-2xl">
                Soggy Doggy <span className="text-[#7bc56b]">Grooming</span>
              </div>
              <div className="text-sm text-slate-500">Gentle care, clean pets, happy tails</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium md:gap-6">
            <a href="#home" className="text-[#9b72c7] hover:text-[#7bc56b]">Home</a>
            <a href="#about" className="text-[#9b72c7] hover:text-[#7bc56b]">About</a>
            <a href="#services" className="text-[#9b72c7] hover:text-[#7bc56b]">Services</a>
            <a href="#gallery" className="text-[#9b72c7] hover:text-[#7bc56b]">Gallery</a>
            <a href="#team" className="text-[#9b72c7] hover:text-[#7bc56b]">Team</a>
            <a href="#contact" className="text-[#9b72c7] hover:text-[#7bc56b]">Contact</a>
            <a
              href="https://soggydoggygrooming.myonlineappointment.com/Booking/?sid=0&guid=04b66c9d-bcf9-47b5-89f6-a6ad0e2ce141&customerId=257741"
              className="rounded-xl bg-[#7bc56b] px-4 py-2 text-white transition hover:bg-[#69b25a]"
            >
              Book Now
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,197,107,0.12),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(155,114,199,0.16),transparent_20%),radial-gradient(circle_at_40%_75%,rgba(123,197,107,0.1),transparent_18%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-full border border-[#d9d2eb] bg-white px-4 py-1 text-sm text-[#9b72c7] shadow-sm">
                Milledgeville pet grooming
              </div>
              <h1 className="max-w-xl text-4xl font-bold leading-tight text-slate-800 sm:text-5xl">
                Fresh cuts, fluffy coats, and a boutique grooming experience.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Soggy Doggy Grooming offers a welcoming place for baths, trims, grooming, and pampering. Book online anytime, browse our gallery, and check back as online payments and the shop roll out soon.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://soggydoggygrooming.myonlineappointment.com/Booking/?sid=0&guid=04b66c9d-bcf9-47b5-89f6-a6ad0e2ce141&customerId=257741"
                  className="rounded-2xl bg-[#9b72c7] px-6 py-3 font-semibold text-white shadow-lg shadow-[#9b72c7]/25 transition hover:-translate-y-0.5 hover:bg-[#8c61ba]"
                >
                  Book Online
                </a>
                <a
                  href="#gallery"
                  className="rounded-2xl border border-[#b8e0b0] bg-white px-6 py-3 font-semibold text-[#5da950] transition hover:-translate-y-0.5 hover:border-[#7bc56b]"
                >
                  View Gallery
                </a>
              </div>
              <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                {[
                  "Online booking",
                  "Friendly team",
                  "Photo gallery",
                  "Coming soon shop",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#e6def5] bg-white/80 px-4 py-3 text-center text-slate-600 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-[#e6def5] bg-white p-6 shadow-2xl shadow-[#9b72c7]/10">
                <div className="mb-6 rounded-[1.5rem] bg-gradient-to-br from-[#efe7f9] to-[#edf8ea] p-4">
                  <div className="overflow-hidden rounded-[1.5rem] bg-white/80">
                    <img
                      src="/images/soggydoggylogo.jpg"
                      alt="Soggy Doggy Grooming logo"
                      className="h-64 w-full object-contain sm:h-72"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7f2fd] p-5">
                    <div className="text-sm font-semibold uppercase tracking-wide text-[#9b72c7]">Hours</div>
                    <div className="mt-3 space-y-1 text-sm text-slate-600">
                      <div>Sun: Closed</div>
                      <div>Mon: Closed</div>
                      <div>Tue: 9:00 am – 5:30 pm</div>
                      <div>Wed: 9:00 am – 3:00 pm</div>
                      <div>Thu: 9:00 am – 5:30 pm</div>
                      <div>Fri: 9:00 am – 5:30 pm</div>
                      <div>Sat: 9:00 am – 3:00 pm</div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#eef9ec] p-5">
                    <div className="text-sm font-semibold uppercase tracking-wide text-[#5da950]">Contact</div>
                    <div className="mt-3 space-y-1 break-words text-sm text-slate-600">
                      <div>(478) 452-2931</div>
                      <div>soggydoggypetgrooming1@gmail.com</div>
                      <div>1820 North Columbia St</div>
                      <div>Milledgeville, GA 31061</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-6 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#e6def5] bg-white px-6 py-5 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b72c7]">Online payments</div>
                <div className="mt-2 text-lg font-semibold text-slate-800">Coming soon</div>
                <p className="mt-2 text-sm text-slate-600">
                  Secure online payment options will be available in a future update.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#dff0db] bg-white px-6 py-5 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5da950]">Online shop</div>
                <div className="mt-2 text-lg font-semibold text-slate-800">Coming soon</div>
                <p className="mt-2 text-sm text-slate-600">
                  Retail items, pet accessories, and featured products will be added soon.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-[#e6def5] bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7bc56b]">About us</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">Boutique grooming with a caring touch</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Established in 2010, Soggy Doggy Grooming is dedicated to helping pets look their best and feel comfortable throughout the grooming experience. Our salon provides a warm, welcoming environment where pets receive attentive care, quality grooming, and personalized service.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                From routine baths and brush-outs to full grooming appointments, our goal is to make each visit smooth, friendly, and stress-free for both pets and their owners.
              </p>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-[#efe7f9] to-[#f7f2fd] p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b72c7]">Established</div>
              <div className="mt-3 text-4xl font-bold text-slate-800">2010</div>
              <p className="mt-3 text-sm text-slate-600">Serving pet owners with professional grooming and boutique care.</p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7bc56b]">Services</div>
            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">Popular grooming services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              A full service list can be linked from the booking platform. This section highlights core offerings while keeping the website easy to scan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-[1.75rem] border border-[#e6def5] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3ecfb] text-xl">✂️</div>
                <h3 className="text-xl font-semibold text-[#9b72c7]">{service}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Gentle, professional grooming with a focus on comfort, cleanliness, and a happy experience for every pet.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#f5f0fc] to-[#edf8ea] py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b72c7]">Book online</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-800">Appointments made simple</h3>
              <p className="mt-4 text-slate-600">
                Send customers straight to your online booking page so they can request appointments at any time.
              </p>
              <a href="https://soggydoggygrooming.myonlineappointment.com/Booking/?sid=0&guid=04b66c9d-bcf9-47b5-89f6-a6ad0e2ce141&customerId=257741" className="mt-6 inline-block rounded-2xl bg-[#7bc56b] px-5 py-3 font-semibold text-white">
                Start Booking
              </a>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b72c7]">Online payments</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-800">Coming soon</h3>
              <p className="mt-4 text-slate-600">
                A future section can support secure online invoice payments or deposits when you are ready to enable them.
              </p>
              <div className="mt-6 inline-block rounded-full border border-[#e6def5] px-4 py-2 text-sm text-slate-500">
                Placeholder module
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b72c7]">Online shop</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-800">Coming soon</h3>
              <p className="mt-4 text-slate-600">
                Reserve space for retail products, pet accessories, seasonal items, and gift cards.
              </p>
              <div className="mt-6 inline-block rounded-full border border-[#e6def5] px-4 py-2 text-sm text-slate-500">
                Placeholder module
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7bc56b]">Gallery</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">Showcase your work</h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Real grooming results from Soggy Doggy Grooming.
              </p>
            </div>
            <a href="https://www.facebook.com/profile.php?id=100066884250858" className="rounded-2xl border border-[#d9d2eb] bg-white px-5 py-3 font-semibold text-[#9b72c7]">
              Visit Facebook
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.src} className="group overflow-hidden rounded-[2rem] border border-[#e6def5] bg-white shadow-sm">
                <div className="h-72 overflow-hidden bg-gradient-to-br from-[#efe7f9] to-[#edf8ea]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="font-semibold text-slate-800">{item.title}</div>
                  <div className="mt-2 text-sm text-slate-600">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7bc56b]">Team</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">Meet the groomers</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="rounded-[2rem] border border-[#e6def5] bg-gradient-to-b from-white to-[#faf7fe] p-8 text-center shadow-sm">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#eef9ec] text-3xl">🐾</div>
                  <h3 className="text-xl font-semibold text-[#9b72c7]">{member.name}</h3>
                  <p className="mt-2 text-slate-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#e6def5] bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7bc56b]">Contact us</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">Visit or call today</h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <p><span className="font-semibold text-slate-800">Address:</span> 1820 North Columbia St, Milledgeville, GA 31061</p>
                <p><span className="font-semibold text-slate-800">Phone:</span> (478) 452-2931</p>
                <p><span className="font-semibold text-slate-800">Email:</span> soggydoggypetgrooming1@gmail.com</p>
                <p><span className="font-semibold text-slate-800">Booking:</span> Available online anytime</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://soggydoggygrooming.myonlineappointment.com/Contact" className="rounded-2xl bg-[#9b72c7] px-6 py-3 font-semibold text-white">Contact Page</a>
                <a href="https://soggydoggygrooming.myonlineappointment.com/User/Login" className="rounded-2xl border border-[#d9d2eb] px-6 py-3 font-semibold text-[#9b72c7]">Customer Login</a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#e6def5] bg-gradient-to-br from-[#efe7f9] to-[#edf8ea] p-4 shadow-sm">
              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-inner">
                <iframe
                  title="Soggy Doggy Grooming Map"
                  src="https://www.google.com/maps?q=1820+North+Columbia+St,+Milledgeville,+GA+31061&z=15&output=embed"
                  className="h-[360px] w-full border-0 sm:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e6def5] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Soggy Doggy Grooming. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="https://soggydoggygrooming.myonlineappointment.com/Services" className="hover:text-[#9b72c7]">Services</a>
            <a href="https://soggydoggygrooming.myonlineappointment.com/Specials" className="hover:text-[#9b72c7]">Specials</a>
            <a href="https://www.facebook.com/profile.php?id=100066884250858" className="hover:text-[#9b72c7]">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
