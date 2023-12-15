import * as React from "react";
import Counsellingcard from "./Counsellingcard";

const Counselling = () => {
  const therapists = [
    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },


    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },



    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },



    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },




    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },





    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },



    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },



    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },




    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },





    {
      name: "Alexandra Sherley",
      imageSrc: "https://photos.psychologytoday.com/3f32e39a-6322-4e8e-9122-c9688a2541d9/2/320x400.jpeg",
      role: "Psychotherapist MSc, MBACP",
      phoneNumber: "020 4538 8458",
      detail:"Psychotherapist MSc, MBACPStarting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Katie Yon",
      imageSrc: "https://photos.psychologytoday.com/7f46a35b-0587-477e-85ff-c5037e653edb/2/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych. (she, her)",
      phoneNumber: "020 4538 1487",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Raquel Navarro Martinez",
      imageSrc: "https://photos.psychologytoday.com/330e2180-a2e7-4159-a51f-66db6a3c1bf1/2/320x400.jpeg",
      role: "MSc",
      phoneNumber: "020 4538 4677",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Dr Erika Annabelle Pratte",
      imageSrc: "https://photos.psychologytoday.com/e88c55f8-5c66-4b22-9b4c-3956116bdb64/2/320x400.jpeg",
      role: "Psychologist, PhD, HCPC - Couns. Psych.",
      phoneNumber: "020 4538 3005",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Sarah Keller",
      imageSrc: "https://photos.psychologytoday.com/eb80724e-e1dc-49f9-acac-13a9ee9ac509/1/320x400.jpeg",
      role: "Counsellor, MBACP",
      phoneNumber: "01895 545631",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "The Fitzrovia Psychology Clinic",
      imageSrc: "https://photos.psychologytoday.com/f157d4e8-9aa5-4b17-b532-39c52866eb43/3/320x400.jpeg",
      role: "Psychologist, PsychD, HCPC - Clin. Psych.",
      phoneNumber: "020 4538 4770",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
    {
      name: "Mihaela Rosca",
      imageSrc: "https://photos.psychologytoday.com/3cfd85f2-251f-452c-8e99-cf3aad7902a9/1/320x400.jpeg",
      role: "Counsellor, MBACP (she, her)",
      phoneNumber: "020 4538 0536",
      detail:"Starting counselling or psychotherapy can be a major decision and finding a therapist who feels right for you is really important. Therapy is about finding a safe and containing space to explore together whatever is concerning you – without judgement. It is a chance to work collaboratively to make sense of painful or difficult feelings. I hold an MSc in Psychodynamic Counselling and Psychotherapy from Birkbeck,"
    },
  ];
  
  return (
    <>
    <Counsellingcard therapists={therapists}/>
    </>
  );
};

export default Counselling;
