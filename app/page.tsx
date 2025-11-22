'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import Badge from '@/components/Badge'
import Toggle from '@/components/Toggle'

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<string>('button')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isToggled, setIsToggled] = useState(false)

  const components = [
    { id: 'button', name: 'Button', icon: '🔘' },
    { id: 'card', name: 'Card', icon: '🃏' },
    { id: 'input', name: 'Input', icon: '📝' },
    { id: 'modal', name: 'Modal', icon: '🪟' },
    { id: 'badge', name: 'Badge', icon: '🏷️' },
    { id: 'toggle', name: 'Toggle', icon: '🔄' },
  ]

  const renderComponentDemo = () => {
    switch (selectedComponent) {
      case 'button':
        return (
          <div className={styles.demoSection}>
            <h3>Button Variants</h3>
            <div className={styles.componentGrid}>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="danger">Danger Button</Button>
              <Button variant="primary" disabled>Disabled Button</Button>
            </div>
          </div>
        )
      case 'card':
        return (
          <div className={styles.demoSection}>
            <h3>Card Components</h3>
            <div className={styles.componentGrid}>
              <Card title="Basic Card" description="This is a simple card component with a title and description." />
              <Card
                title="Feature Card"
                description="Cards can contain any content and are perfect for organizing information."
                footer={<Button variant="secondary">Learn More</Button>}
              />
              <Card
                title="Interactive Card"
                description="Click on cards to make them interactive components."
                onClick={() => alert('Card clicked!')}
              />
            </div>
          </div>
        )
      case 'input':
        return (
          <div className={styles.demoSection}>
            <h3>Input Fields</h3>
            <div className={styles.componentStack}>
              <Input
                placeholder="Enter your name..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Enter your email..."
                label="Email Address"
              />
              <Input
                type="password"
                placeholder="Enter password..."
                label="Password"
              />
              <Input
                placeholder="Disabled input..."
                disabled
              />
              {inputValue && <p className={styles.inputPreview}>You typed: {inputValue}</p>}
            </div>
          </div>
        )
      case 'modal':
        return (
          <div className={styles.demoSection}>
            <h3>Modal Dialog</h3>
            <div className={styles.componentStack}>
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
                <p>This is a modal dialog component. It can contain any content you want!</p>
                <div style={{ marginTop: '20px' }}>
                  <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                    Close Modal
                  </Button>
                </div>
              </Modal>
            </div>
          </div>
        )
      case 'badge':
        return (
          <div className={styles.demoSection}>
            <h3>Badge Components</h3>
            <div className={styles.componentGrid}>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="default">Default</Badge>
            </div>
          </div>
        )
      case 'toggle':
        return (
          <div className={styles.demoSection}>
            <h3>Toggle Switch</h3>
            <div className={styles.componentStack}>
              <Toggle
                checked={isToggled}
                onChange={setIsToggled}
                label="Enable notifications"
              />
              <Toggle
                checked={false}
                onChange={() => {}}
                label="Dark mode"
              />
              <Toggle
                checked={true}
                onChange={() => {}}
                label="Auto-save"
                disabled
              />
              {isToggled && <p className={styles.toggleStatus}>Notifications are enabled!</p>}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Component-Driven Development</h1>
          <p className={styles.subtitle}>Build, test, and showcase reusable UI components</p>
        </header>

        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <h2>Components</h2>
            <nav className={styles.nav}>
              {components.map((comp) => (
                <button
                  key={comp.id}
                  className={`${styles.navItem} ${selectedComponent === comp.id ? styles.active : ''}`}
                  onClick={() => setSelectedComponent(comp.id)}
                >
                  <span className={styles.icon}>{comp.icon}</span>
                  <span>{comp.name}</span>
                </button>
              ))}
            </nav>
          </aside>

          <section className={styles.showcase}>
            <div className={styles.showcaseHeader}>
              <h2>{components.find(c => c.id === selectedComponent)?.name}</h2>
              <Badge variant="info">Interactive</Badge>
            </div>
            {renderComponentDemo()}
          </section>
        </div>
      </div>
    </main>
  )
}
