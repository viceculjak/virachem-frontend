# MCP Setup Guide for Virachem Development

## What is MCP?

Model Context Protocol (MCP) is a way for AI assistants like Cursor to interact with external tools and services. For Virachem, we can use MCP to enhance AI-assisted development.

## ⚠️ Important Note

The specific packages `@modelcontextprotocol/server-shadcn` and `@modelcontextprotocol/server-supabase` mentioned in your original spec **do not exist** on npm. 

Instead, Cursor has **built-in capabilities** that work better for your use case.

---

## 🚀 What Cursor Can Already Do (No MCP Setup Required)

Cursor's AI can already help you with:

### ✅ ShadCN UI Components
- **Ask**: "Add a new ShadCN dialog component"
- **Ask**: "Create a table component using ShadCN"
- Cursor knows the ShadCN component structure and can add them

### ✅ Supabase Operations
- **Ask**: "Add a new column to the products table"
- **Ask**: "Create a function to update product purity"
- Cursor can generate Supabase queries and operations

### ✅ Database Schema Changes
- **Ask**: "Add a reviews table with user_id, product_id, rating, and comment"
- Cursor can generate migration SQL

---

## 🔧 Enhanced Cursor Configuration

To get the most out of Cursor for this project, configure these settings:

### 1. Enable Cursor's Built-in Features

Go to **Cursor Settings** (Cmd/Ctrl + ,):

```json
{
  "cursor.ai.enableCodeGeneration": true,
  "cursor.ai.enableAutocompletions": true,
  "cursor.chat.enabled": true
}
```

### 2. Add Project Context

Create `.cursorrules` file in your project root to give Cursor context about your project:

---

## 🎯 How to Use Cursor AI Effectively for Virachem

### For Adding ShadCN Components:
```
YOU: "Add a toast notification component from ShadCN"
AI: [Generates the component and adds it to your project]
```

### For Supabase Queries:
```
YOU: "Create a function to fetch products by category"
AI: [Generates the Supabase query with proper TypeScript types]
```

### For Database Changes:
```
YOU: "Add a categories table and update products to reference it"
AI: [Generates migration SQL and updates types]
```

### For UI Enhancements:
```
YOU: "Add a loading skeleton to the products page"
AI: [Creates skeleton components with proper styling]
```

---

## 📚 Custom MCP Servers (Advanced - Optional)

If you want to create custom MCP servers for specific workflows:

### 1. Install MCP SDK:
```bash
npm install -g @modelcontextprotocol/sdk
```

### 2. Create Custom Server:
```typescript
// mcp-server/virachem-server.ts
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  {
    name: "virachem-dev-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Add custom tools here
server.setRequestHandler(/* ... */);

const transport = new StdioServerTransport();
await server.connect(transport);
```

### 3. Configure in Cursor:

Add to `~/.cursor/config.json`:
```json
{
  "mcpServers": {
    "virachem": {
      "command": "node",
      "args": ["/path/to/virachem-server.js"]
    }
  }
}
```

---

## 🎓 Practical AI-Assisted Development Workflow

Here's how to effectively use Cursor AI to continue building Virachem:

### 1. Adding New Features
```
✅ Good Prompts:
- "Add a product comparison feature where users can compare 2 products side by side"
- "Create an admin dashboard to manage quote requests"
- "Add email notifications when a quote is submitted"
- "Implement product categories and filtering"

❌ Avoid:
- Vague requests: "Make it better"
- Too broad: "Build the entire backend"
```

### 2. Improving Existing Features
```
✅ Good Prompts:
- "Add debouncing to the search input to reduce API calls"
- "Implement pagination for the products page (10 items per page)"
- "Add form validation with error messages to the quote form"
- "Create a product favorites/bookmarks feature using localStorage"
```

### 3. Database Operations
```
✅ Good Prompts:
- "Add a product_categories table and create a many-to-many relationship"
- "Create an index on the products.cas column for faster searches"
- "Add a soft delete feature for products (deleted_at column)"
- "Create a view for popular products based on quote request counts"
```

### 4. UI/UX Improvements
```
✅ Good Prompts:
- "Add loading skeletons to all pages"
- "Implement dark mode toggle"
- "Add animations when products load"
- "Create a mobile-optimized navigation menu"
```

---

## 🔥 Next Features to Build (Use Cursor AI)

Here are suggested features you can ask Cursor to implement:

### Priority 1 - Core Features:
1. **Product Categories**
   - "Add a categories table and associate products with categories"
   - "Add category filtering to the products page"

2. **Admin Dashboard**
   - "Create an admin page to view all quote requests"
   - "Add ability to update quote request status (new, processing, completed)"

3. **Product Search Improvements**
   - "Add advanced search with filters for purity, molecular weight range, etc."
   - "Implement search history using localStorage"

### Priority 2 - UX Enhancements:
4. **Product Comparison**
   - "Let users select multiple products and compare them side by side"

5. **Email Notifications**
   - "Set up Supabase Edge Functions to send email when quote is submitted"

6. **Product Details Expansion**
   - "Add tabs to product detail page: Overview, Specifications, Safety Data"
   - "Add related products section"

### Priority 3 - Advanced Features:
7. **User Authentication**
   - "Add Supabase Auth for users to save their quote history"
   - "Create a user dashboard to track previous quotes"

8. **Product Inventory**
   - "Add inventory tracking (in_stock, low_stock, out_of_stock)"
   - "Show stock status on product cards"

9. **Analytics**
   - "Add Google Analytics or Plausible for tracking"
   - "Create an admin analytics page showing popular products"

---

## 💡 Pro Tips for Cursor AI

### 1. Use @ Mentions
```
@src/app/products/page.tsx add pagination to this page
```

### 2. Reference Multiple Files
```
@src/app/products/page.tsx @database-schema.sql 
Add a favorites feature where users can save products
```

### 3. Be Specific About Design
```
Add a modal dialog using ShadCN Dialog component.
Style it to match our urban aesthetic with primary color #FF4215.
Include a close button and overlay backdrop.
```

### 4. Request Tests (If Needed)
```
Create unit tests for the search functionality in the products page
```

### 5. Ask for Refactoring
```
Refactor the quote form to use react-hook-form for better validation
```

---

## 🐛 Troubleshooting

### If Cursor AI Seems Slow:
1. Clear Cursor cache: Settings → Advanced → Clear Cache
2. Reduce context: Close unused files
3. Be more specific in prompts

### If AI Makes Mistakes:
1. Use "Undo" (Cmd/Ctrl + Z)
2. Be more specific about requirements
3. Reference specific files with @mentions

### If You Need More Control:
1. Ask AI to explain the plan first
2. Request changes in smaller steps
3. Review generated code before accepting

---

## 📖 Learning Resources

- **Cursor Docs**: [cursor.sh/docs](https://cursor.sh/docs)
- **MCP Specification**: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **ShadCN UI**: [ui.shadcn.com](https://ui.shadcn.com)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)

---

## 🎯 Quick Start Checklist

To start building with AI assistance:

- [ ] Open Cursor IDE with this project
- [ ] Review the codebase structure
- [ ] Read through existing code in `src/app/`
- [ ] Think about what feature you want to add
- [ ] Open Cursor Chat (Cmd/Ctrl + L)
- [ ] Ask specific questions or request features
- [ ] Review generated code before accepting
- [ ] Test the changes in browser
- [ ] Commit your changes to git

---

**Ready to build!** 🚀

Start by asking Cursor AI to help you implement any of the suggested features above, or come up with your own ideas!
