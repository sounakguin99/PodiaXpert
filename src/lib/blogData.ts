export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-plantar-fasciitis',
    title: 'Understanding Plantar Fasciitis: Causes and Treatments',
    excerpt: 'Plantar fasciitis is one of the most common causes of heel pain. Learn about its symptoms and how to treat it.',
    content: 'Plantar fasciitis involves inflammation of a thick band of tissue that runs across the bottom of your foot and connects your heel bone to your toes. It is one of the most common causes of heel pain.\n\n### Symptoms\nThe pain is usually the worst with the first few steps after awakening, although it can also be triggered by long periods of standing or when you get up from sitting.\n\n### Causes\nYour plantar fascia is in the shape of a bowstring, supporting the arch of your foot and absorbing shock when you walk. If tension and stress on this bowstring become too great, small tears can occur in the fascia.\n\n### Treatment\nMost people who have plantar fasciitis recover in several months with conservative treatment, including resting, icing the painful area, and stretching.',
    date: 'May 1, 2026',
    author: 'Dr. A. Sharma',
    category: 'Heel Pain',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'diabetic-foot-care-tips',
    title: 'Essential Diabetic Foot Care Tips',
    excerpt: 'Diabetes can be dangerous for your feet. Follow these essential tips to keep your feet healthy and prevent complications.',
    content: 'People with diabetes are prone to foot problems, often because of two complications of the disease: nerve damage (neuropathy) and poor blood flow.\n\n### Why Foot Care is Important\nNerve damage can cause you to lose feeling in your feet. As a result, you might not feel a pebble inside your sock that is causing a sore. Poor blood flow means injuries heal slowly.\n\n### Daily Tips\n1. Inspect your feet daily for cuts, blisters, redness, swelling, or nail problems.\n2. Wash your feet in lukewarm (not hot!) water.\n3. Moisturize your feet, but avoid putting lotion between your toes.\n4. Never walk barefoot, even indoors.\n\n### When to see a Podiatrist\nIf you have diabetes, you should have your feet examined by a podiatrist at least once a year.',
    date: 'April 25, 2026',
    author: 'Dr. S. Roy',
    category: 'Diabetic Foot',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'benefits-of-custom-orthotics',
    title: 'The Hidden Benefits of Custom Orthotics',
    excerpt: 'Custom orthotics do much more than just support your arches. Discover how they can improve your overall posture and alignment.',
    content: 'Custom orthotics are specially made devices designed to support and comfort your feet. Prescription orthotics are crafted for you and no one else.\n\n### What are they?\nThey match the contours of your feet precisely and are designed for the way you move.\n\n### Benefits\n- **Pain Relief:** They can alleviate pain in the foot, ankle, and even the lower back.\n- **Correction:** Orthotics correct abnormalities in foot mechanics.\n- **Support:** They provide superior support compared to over-the-counter insoles.\n\n### Are they right for you?\nIf you suffer from chronic foot pain, flat feet, or plantar fasciitis, custom orthotics might be the solution you have been looking for.',
    date: 'April 18, 2026',
    author: 'Dr. P. Das',
    category: 'Orthotics',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'treating-corns-and-calluses',
    title: 'How to Treat and Prevent Corns and Calluses',
    excerpt: 'Corns and calluses are thick, hardened layers of skin. Learn how to safely treat them at home and when to see a doctor.',
    content: 'Corns and calluses develop when your skin tries to protect itself against friction and pressure.\n\n### Symptoms\n- A thick, rough area of skin\n- A hardened, raised bump\n- Tenderness or pain under your skin\n\n### Prevention\nWear shoes that give your toes plenty of room. If you cannot wiggle your toes, your shoes are too tight.\n\n### Treatment\nSoak your hands or feet in warm, soapy water to soften corns and calluses. Use a pumice stone or emery board to gently remove the thickened skin. Never try to cut them off yourself, especially if you are diabetic.',
    date: 'April 10, 2026',
    author: 'Dr. A. Sharma',
    category: 'Skin Conditions',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'sports-injuries-in-podiatry',
    title: 'Common Sports Injuries and How to Avoid Them',
    excerpt: 'Athletes are prone to foot and ankle injuries. Read about the most common ones and effective prevention strategies.',
    content: 'Sports injuries involving the foot and ankle are common among athletes of all levels.\n\n### Ankle Sprains\nAn ankle sprain occurs when the strong ligaments that support the ankle stretch beyond their limits and tear. Rest, ice, compression, and elevation (RICE) are the standard first steps in treatment.\n\n### Achilles Tendinitis\nThis is an overuse injury of the Achilles tendon, the band of tissue that connects calf muscles at the back of the lower leg to your heel bone. It is common in runners who have suddenly increased the intensity or duration of their runs.\n\n### Prevention\nProper footwear, stretching before activities, and gradually increasing exercise intensity can prevent many of these injuries.',
    date: 'April 5, 2026',
    author: 'Dr. P. Das',
    category: 'Sports Medicine',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'choosing-the-right-footwear',
    title: 'A Guide to Choosing the Right Footwear',
    excerpt: 'Your shoes play a critical role in foot health. Here is what to look for when buying your next pair of shoes.',
    content: 'Wearing the wrong shoes can exacerbate existing foot problems and cause new ones.\n\n### Arch Support\nYour shoes should support the arch of your foot. Lack of support can lead to pain and conditions like plantar fasciitis.\n\n### Toe Box\nThe toe box should be wide enough that your toes are not cramped. Tight toe boxes can cause bunions and hammertoes.\n\n### Heel Height\nAvoid excessively high heels. They put undue stress on the ball of your foot and can alter your body\'s natural alignment.\n\nAlways shop for shoes later in the day when your feet are slightly swollen to ensure a proper fit.',
    date: 'March 28, 2026',
    author: 'Dr. S. Roy',
    category: 'General Foot Care',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'flat-feet-causes-and-treatments',
    title: 'Flat Feet: Causes, Symptoms, and Treatments',
    excerpt: 'Having flat feet is common, but it can sometimes cause pain. Learn about the causes and available treatments.',
    content: 'Flat feet is a condition where the arches on the inside of your feet flatten when pressure is put on them.\n\n### Causes\nFlat feet can occur when the arches do not develop during childhood. They can also develop later in life after an injury or from the simple wear-and-tear stresses of age.\n\n### Symptoms\nMost people have no signs or symptoms associated with flat feet. However, some people experience foot pain, particularly in the heel or arch area.\n\n### Treatments\nIf you experience pain, a podiatrist might recommend arch supports (orthotics), stretching exercises, or supportive shoes.',
    date: 'March 15, 2026',
    author: 'Dr. A. Sharma',
    category: 'Structural Conditions',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'when-to-see-a-podiatrist',
    title: '7 Signs You Need to See a Podiatrist',
    excerpt: 'Ignoring foot pain can lead to serious complications. Here are 7 signs that it is time to schedule a visit with a podiatrist.',
    content: 'Foot pain is never normal. Here are signs you should seek professional help:\n\n1. **Persistent Pain:** Pain that lasts longer than a few days.\n2. **Numbness or Tingling:** Could indicate neuropathy.\n3. **Swelling:** Unexplained swelling in the foot or ankle.\n4. **Changes in Nail Color:** Could be a fungal infection.\n5. **A Sore That Wont Heal:** Especially critical if you have diabetes.\n6. **Flat Feet Pain:** If your lack of an arch causes discomfort.\n7. **Suspected Broken Bone:** After an injury or trauma.\n\nDo not wait for the problem to worsen. Early diagnosis leads to better outcomes.',
    date: 'March 1, 2026',
    author: 'Dr. S. Roy',
    category: 'General Foot Care',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800'
  }
];
