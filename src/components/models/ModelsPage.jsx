import React, { useState } from 'react';
import '../Page2/second-page.css';
import NavModal from '../NavModal/NavModal'; 

export default function ModelsPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Определяем темы для навигации
  const topics = [
    { id: 1, title: '1 - Начало работы с ИИ', path: '/intro' },
    { id: 2, title: '2 - Установка и поиск моделей', path: '/models' },
    { id: 3, title: '3 - Корректные запросы', path: '/prompts' },
  ];

  return (
    <div className="learn-container">

      <header className="learn-header">
        <h1>Установка и поиск моделей</h1>
        <p className="subtitle">
          Как начать работу с ИИ, настроить локальные модели и запустить эксперименты
        </p>
      </header>

      <section className="theory">

        <div className="card">
          <h2>Введение в локальные модели ИИ</h2>
          <p>
            Современный искусственный интеллект доступен не только через облачные сервисы. 
            Сегодня любой пользователь может запускать модели ИИ локально на своём компьютере. 
            Это позволяет экспериментировать, обучаться и создавать собственные приложения без постоянного подключения к интернету.
          </p>
        </div>

        <div className="card">
          <h2>Основные виды доступного ИИ</h2>
          <ul>
            <li><strong>Языковые модели (LLM):</strong> GPT, LLaMA, Mistral, Falcon — для работы с текстом, кодом, ответами на вопросы.</li>
            <li><strong>Генерация изображений:</strong> Stable Diffusion, локальные версии DALL·E — создание иллюстраций и концепт-арта.</li>
            <li><strong>Мультимодальные модели:</strong> CLIP, BLIP — объединяют текст и изображение, позволяют описывать или искать визуальные объекты.</li>
            <li><strong>Специализированные модели:</strong> модели для кода (CodeLLaMA, StarCoder), аудио (VITS, Riffusion).</li>
          </ul>
        </div>

        <div className="card">
          <h2>Настройка локальной среды</h2>
          <p>Для работы с локальными моделями необходимо подготовить компьютер и программное окружение:</p>
          <ol>
            <li>Установить Python 3.10+ и пакетный менеджер pip или conda.</li>
            <li>Установить библиотеки: <code>torch</code>, <code>transformers</code>, <code>diffusers</code>.</li>
            <li>Скачать модель из открытых источников (Hugging Face, GitHub).</li>
            <li>Подготовить GPU для ускорения работы моделей (желательно NVIDIA с поддержкой CUDA).</li>
          </ol>
        </div>

        <div className="card">
          <h2>Запуск локальной языковой модели (LLM)</h2>
          <pre>
            <code>
from transformers import AutoModelForCausalLM, AutoTokenizer{"\n"}
model_name = "NousResearch/Nous-Hermes-13b"{"\n"}
tokenizer = AutoTokenizer.from_pretrained(model_name){"\n"}
model = AutoModelForCausalLM.from_pretrained(model_name){"\n\n"}
input_text = "Объясни основы ИИ простыми словами"{"\n"}
inputs = tokenizer(input_text, return_tensors="pt"){"\n"}
outputs = model.generate(**inputs, max_new_tokens=100){"\n"}
print(tokenizer.decode(outputs[0]))
            </code>
          </pre>
        </div>

        <div className="card">
          <h2>Запуск генерации изображений</h2>
          <pre>
            <code>
from diffusers import StableDiffusionPipeline{"\n"}
import torch{"\n\n"}
pipe = StableDiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v1-4",{"\n"}torch_dtype=torch.float16){"\n"}
pipe = pipe.to("cuda"){"\n\n"}
prompt = "Киберпанк город ночью, неоновый свет"{"\n"}
image = pipe(prompt).images[0]{"\n"}
image.save("output.png")
            </code>
          </pre>
        </div>

        <div className="card">
          <h2>Советы для начинающих</h2>
          <ul>
            <li>Начинайте с небольших моделей, чтобы не перегружать компьютер.</li>
            <li>Используйте готовые образы и пакеты: Hugging Face, AUTOMATIC1111 (для Stable Diffusion).</li>
            <li>Постепенно переходите к крупным моделям и дообучению на своих данных.</li>
            <li>Следите за лицензиями моделей — некоторые доступны только для исследовательских целей.</li>
          </ul>
        </div>

      </section>

      {/* Кнопка навигации */}
      <aside className="sidebar right">
        <button className="nav" onClick={() => setIsOpen(true)}>
          <img src="../list-ico-site-white.ico" alt="Навигация" />
          <span>Навигация по темам</span>
        </button>
      </aside>



      

      <NavModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={() => {}}
        topics={topics}
      />

    </div>
  );
}