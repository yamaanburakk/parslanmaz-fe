'use client';

import { useState } from 'react';

interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

interface BlogCommentsProps {
  postId: number;
}

const BlogComments = ({ postId }: BlogCommentsProps) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: {
        name: 'Mehmet Kaya',
        avatar: '/api/placeholder/40/40',
        role: 'Restoran Sahibi'
      },
      content: 'Çok faydalı bir yazı olmuş. Özellikle günlük temizlik rutini kısmı çok işime yaradı. Teşekkürler!',
      date: '2024-01-16',
      likes: 12,
      replies: [
        {
          id: 2,
          author: {
            name: 'Ahmet Yılmaz',
            avatar: '/api/placeholder/40/40',
            role: 'Yazar'
          },
          content: 'Teşekkür ederim Mehmet Bey! Uyguladığınız yöntemlerin sonuçlarını paylaşırsanız çok sevinirim.',
          date: '2024-01-16',
          likes: 5
        }
      ]
    },
    {
      id: 3,
      author: {
        name: 'Fatma Demir',
        avatar: '/api/placeholder/40/40',
        role: 'Mutfak Şefi'
      },
      content: 'HACCP standartlarına uygun temizlik için bu rehber gerçekten çok değerli. Ekibimle paylaştım.',
      date: '2024-01-15',
      likes: 8
    },
    {
      id: 4,
      author: {
        name: 'Ali Özkan',
        avatar: '/api/placeholder/40/40',
        role: 'Catering İşletmecisi'
      },
      content: 'Profesyonel bakım kısmında bahsettiğiniz yıllık kontrolleri mutlaka yaptırmalıyız. Çok önemli bir nokta.',
      date: '2024-01-15',
      likes: 6
    }
  ]);

  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: {
          name: 'Misafir Kullanıcı',
          avatar: '/api/placeholder/40/40'
        },
        content: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleSubmitReply = (e: React.FormEvent, parentId: number) => {
    e.preventDefault();
    if (replyContent.trim()) {
      const reply: Comment = {
        id: Date.now(),
        author: {
          name: 'Misafir Kullanıcı',
          avatar: '/api/placeholder/40/40'
        },
        content: replyContent,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };

      setComments(comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply]
          };
        }
        return comment;
      }));

      setReplyContent('');
      setReplyTo(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = (commentId: number, isReply: boolean = false, parentId?: number) => {
    if (isReply && parentId) {
      setComments(comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies?.map(reply => 
              reply.id === commentId 
                ? { ...reply, likes: reply.likes + 1 }
                : reply
            )
          };
        }
        return comment;
      }));
    } else {
      setComments(comments.map(comment => 
        comment.id === commentId 
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      ));
    }
  };

  return (
    <section className="mt-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Yorumlar ({comments.length})
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Aktif tartışma</span>
          </div>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="mb-8 p-6 bg-gray-50 rounded-lg">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold">M</span>
            </div>
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Düşüncelerinizi paylaşın..."
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                rows={4}
              />
              <div className="flex items-center justify-between mt-3">
                <div className="text-sm text-gray-500">
                  {newComment.length}/500 karakter
                </div>
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Yorum Yap
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
              {/* Main Comment */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">
                    {comment.author.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{comment.author.name}</h4>
                    {comment.author.role && (
                      <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded text-xs font-medium">
                        {comment.author.role}
                      </span>
                    )}
                    <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
                  </div>
                  <p className="text-gray-700 mb-3 leading-relaxed">{comment.content}</p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-accent-500 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                    <button
                      onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                      className="text-gray-500 hover:text-primary-500 transition-colors text-sm"
                    >
                      Yanıtla
                    </button>
                  </div>

                  {/* Reply Form */}
                  {replyTo === comment.id && (
                    <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-semibold text-sm">M</span>
                        </div>
                        <div className="flex-1">
                          <textarea
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            placeholder="Yanıtınızı yazın..."
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                            rows={2}
                          />
                          <div className="flex items-center justify-end space-x-2 mt-2">
                            <button
                              type="button"
                              onClick={() => setReplyTo(null)}
                              className="text-gray-500 hover:text-gray-700 text-sm"
                            >
                              İptal
                            </button>
                            <button
                              type="submit"
                              disabled={!replyContent.trim()}
                              className="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              Yanıtla
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 ml-6 space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 font-semibold text-sm">
                              {reply.author.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h5 className="font-medium text-gray-900 text-sm">{reply.author.name}</h5>
                              {reply.author.role && (
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                  {reply.author.role}
                                </span>
                              )}
                              <span className="text-xs text-gray-500">{formatDate(reply.date)}</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-2">{reply.content}</p>
                            <button
                              onClick={() => handleLike(reply.id, true, comment.id)}
                              className="flex items-center space-x-1 text-gray-400 hover:text-accent-500 transition-colors"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              <span className="text-xs">{reply.likes}</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Comments */}
        <div className="text-center mt-8">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
            Daha Fazla Yorum Yükle
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogComments;